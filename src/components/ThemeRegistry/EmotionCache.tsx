"use client";

import { Fragment, ReactNode, useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider as DefaultCacheProvider } from "@emotion/react";
import type {
  EmotionCache,
  Options as OptionsOfCreateCache,
} from "@emotion/cache";
import * as React from "react";
import createCache from "@emotion/cache";

/**
 * `NextAppDirEmotionCacheProvider` 컴포넌트의 프로퍼티 타입.
 *
 * `options`: Emotion 캐시를 생성하는 데 필요한 옵션들.
 * `CacheProvider`: Emotion 캐시 Provider 컴포넌트. 제공되지 않으면 기본값으로 사용됨.
 * `children`: React 자식 컴포넌트.
 */
export type NextAppDirEmotionCacheProviderProps = {
  options: Omit<OptionsOfCreateCache, "insertionPoint">;
  CacheProvider?: (props: {
    value: EmotionCache;
    children: ReactNode;
  }) => React.JSX.Element | null;
  children: ReactNode;
};

/**
 * Next 앱 디렉터리의 Emotion 캐시 Provider.
 *
 * 이 컴포넌트는 Emotion 스타일을 서버 사이드에서 삽입된 HTML에 적절히 처리하기 위한 목적으로 사용됩니다.
 * SSR, SSG 사용시 유용.
 *
 * @example
 * const MyApp = ({ Component, pageProps }) => {
 *   return (
 *     <NextAppDirEmotionCacheProvider options={myOptions}>
 *       <Component {...pageProps} />
 *     </NextAppDirEmotionCacheProvider>
 *   );
 * }
 *
 * @param {NextAppDirEmotionCacheProviderProps} props - Emotion 캐시 Provider의 프로퍼티.
 * @returns {JSX.Element} - Emotion 스타일을 처리하는 컴포넌트.
 */

export default function NextAppDirEmotionCacheProvider(
  props: NextAppDirEmotionCacheProviderProps
) {
  const { options, CacheProvider = DefaultCacheProvider, children } = props;

  // Emotion 캐시 및 flush 메서드 초기화
  const [registry] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: { name: string; isGlobal: boolean }[] = [];
    cache.insert = (...args) => {
      const [selector, serialized] = args;
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({
          name: serialized.name,
          isGlobal: !selector,
        });
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  // 서버에서 삽입된 HTML을 처리하기 위한 훅 사용
  useServerInsertedHTML(() => {
    const inserted = registry.flush();
    if (inserted.length === 0) {
      return null;
    }
    let styles = "";
    let dataEmotionAttribute = registry.cache.key;

    const globals: {
      name: string;
      style: string;
    }[] = [];

    inserted.forEach(({ name, isGlobal }) => {
      const style = registry.cache.inserted[name];

      if (typeof style !== "boolean") {
        if (isGlobal) {
          globals.push({ name, style });
        } else {
          styles += style;
          dataEmotionAttribute += ` ${name}`;
        }
      }
    });

    return (
      <Fragment>
        {globals.map(({ name, style }) => (
          <style
            key={name}
            data-emotion={`${registry.cache.key}-global ${name}`}
            dangerouslySetInnerHTML={{ __html: style }}
          />
        ))}
        {styles && (
          <style
            data-emotion={dataEmotionAttribute}
            dangerouslySetInnerHTML={{ __html: styles }}
          />
        )}
      </Fragment>
    );
  });

  // Emotion 캐시를 자식 컴포넌트에 제공
  return <CacheProvider value={registry.cache}>{children}</CacheProvider>;
}

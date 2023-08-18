"use client";
import React, { createContext, useState, ReactNode } from "react";

/**
 * `TransitionContext`의 타입 정의.
 *
 * `url`: 이동할 페이지의 URL 상태.
 * `chooseUrl`: url 상태 setter.
 */
interface TransitionContextType {
  url: string;
  chooseUrl: (path: string) => void;
}

/**
 * 기본값 설정 :
 *  - `url`: "/"
 *  - `chooseUrl`: 빈 함수
 */
const TransitionContext = createContext<TransitionContextType>({
  url: "/",
  chooseUrl: () => {},
});

/**
 * `TransitionProvider`의 props 타입 정의.
 */
interface TransitionProviderProps {
  children: ReactNode;
}

/**
 * `TransitionContext`의 provider.
 *
 * 자식 컴포넌트들에게 `url` 상태와 `chooseUrl` 함수를 제공합니다.
 *
 * @param {ReactNode} children - React 컴포넌트의 자식 요소들.
 * @returns {JSX.Element} - Transition 상태를 공급하는 컨텍스트 공급자.
 */
export const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const [url, setUrl] = useState<string>("/");

  const chooseUrl = (path: string) => {
    setUrl(path);
  };

  return (
    <TransitionContext.Provider
      value={{
        url,
        chooseUrl,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;

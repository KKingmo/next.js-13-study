/**
 * 서버와 클라이언트 사이에서 안전하게 작동하는 isomorphic `useLayoutEffect` 훅.
 *
 * 만약 `window` 객체가 정의되어 있다면, `useLayoutEffect`를 사용하며, 그렇지 않다면 `useEffect`를 사용합니다.
 * 이렇게 함으로써, 서버 사이드 렌더링 중에 발생하는 경고나 문제를 방지할 수 있습니다.
 *
 * @example
 * const MyComponent = () => {
 *   useIsomorphicLayoutEffect(() => {
 *     console.log("This effect works safely on both client and server.");
 *   });
 *
 *   return <div>My Component</div>;
 * }
 *
 * @returns {Function} - `window` 객체의 유무에 따라 `useLayoutEffect` 또는 `useEffect`를 반환합니다.
 */
import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

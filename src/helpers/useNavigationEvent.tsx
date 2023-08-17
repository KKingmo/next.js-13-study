/**
 * 현재 경로가 변경될 때 콜백을 트리거하는 커스텀 훅.
 *
 * @example
 * const MyComponent = () => {
 *   useNavigationEvent(() => {
 *     console.log("Pathname changed!");
 *   });
 *
 *   return <div>My Component</div>;
 * }
 *
 * @param {Function} onPathnameChange - 경로가 변경될 때 호출될 콜백.
 */
"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const useNavigationEvent = (onPathnameChange: () => void) => {
  const pathname = usePathname();

  const savedPathNameRef = useRef(pathname);

  useEffect(() => {
    if (savedPathNameRef.current !== pathname) {
      console.log(
        `여기에서 : ${savedPathNameRef.current}\n열루가요 : ${pathname}`
      );
      onPathnameChange();
      savedPathNameRef.current = pathname;
    }
  }, [pathname, onPathnameChange]);
};

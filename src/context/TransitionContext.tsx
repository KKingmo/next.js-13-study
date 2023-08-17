"use client";
import React, { createContext, useState, ReactNode } from "react";

/**
 * `TransitionContext`의 타입 정의.
 *
 * `completed`: 애니메이션이 완료되었는지의 상태를 나타냄.
 * `toggleCompleted`: 애니메이션 완료 상태를 토글하는 함수.
 */

interface TransitionContextType {
  completed: boolean;
  toggleCompleted: (value: boolean) => void;
}

/**
 * Transition 상태를 관리하기 위한 컨텍스트 생성.
 *
 * 기본값:
 *  - `completed`: false
 *  - `toggleCompleted`: 빈 함수
 */

const TransitionContext = createContext<TransitionContextType>({
  completed: false,
  toggleCompleted: () => {},
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
 * 자식 컴포넌트들에게 `completed` 상태와 `toggleCompleted` 함수를 제공합니다.
 *
 * @example
 * const MyComponent = () => {
 *   const { completed, toggleCompleted } = useContext(TransitionContext);
 *
 *   return <div>{completed ? "Completed" : "Not completed"}</div>;
 * }
 *
 * @param {ReactNode} children - React 컴포넌트의 자식 요소들.
 * @returns {JSX.Element} - Transition 상태를 공급하는 컨텍스트 공급자.
 */

export const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const [completed, setCompleted] = useState<boolean>(false);

  const toggleCompleted = (value: boolean) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;

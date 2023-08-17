"use client";
import { useContext, ReactNode, useRef, useEffect } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

import TransitionContext from "../context/TransitionContext";

interface TransitionComponentProps {
  children: ReactNode;
}

const TransitionComponent = ({ children }: TransitionComponentProps) => {
  const pathname = usePathname();
  const { completed, toggleCompleted } = useContext(TransitionContext);
  const transitionRef = useRef(null);

  return (
    <SwitchTransition mode="out-in">
      <Transition
        key={pathname}
        nodeRef={transitionRef}
        timeout={500}
        onEnter={() => {
          toggleCompleted(false);
          gsap.set(transitionRef.current, {
            autoAlpha: 0,
            scale: 0.8,
            xPercent: -100,
          });
          gsap
            .timeline({
              paused: true,
              onComplete: () => toggleCompleted(true),
            })
            .to(transitionRef.current, {
              autoAlpha: 1,
              xPercent: 0,
              duration: 0.25,
            })
            .to(transitionRef.current, { scale: 1, duration: 0.25 })
            .play();
        }}
        onExit={() => {
          toggleCompleted(false);
          gsap
            .timeline({ paused: true, onComplete: () => toggleCompleted(true) })
            .to(transitionRef.current, { scale: 0.8, duration: 0.2 })
            .to(transitionRef.current, {
              xPercent: 100,
              autoAlpha: 0,
              duration: 0.2,
            })
            .play();
        }}
      >
        {(state) => <div ref={transitionRef}>{children}</div>}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;

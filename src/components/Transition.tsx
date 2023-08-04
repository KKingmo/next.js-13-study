"use client";
import { useContext, ReactNode, useRef } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

import TransitionContext from "../context/TransitionContext";

interface TransitionComponentProps {
  children: ReactNode;
}

const TransitionComponent = ({ children }: TransitionComponentProps) => {
  const pathname = usePathname();
  const { toggleCompleted } = useContext(TransitionContext);
  const transitionRef = useRef(null);

  return (
    <SwitchTransition>
      <Transition
        key={pathname}
        nodeRef={transitionRef}
        timeout={500}
        onEnter={() => {
          toggleCompleted(false);
          gsap.set(transitionRef.current, {
            autoAlpha: 0,
            scale: 0.8,
            yPercent: -100,
          });
          gsap
            .timeline({
              paused: true,
              onComplete: () => toggleCompleted(true),
            })
            .to(transitionRef.current, {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.25,
            })
            .to(transitionRef.current, { scale: 1, duration: 0.25 })
            .play();
        }}
        onExit={() => {
          gsap
            .timeline({ paused: true })
            .to(transitionRef.current, { scale: 0.8, duration: 0.2 })
            .to(transitionRef.current, {
              yPercent: 100,
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

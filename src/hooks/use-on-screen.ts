"use client";

import { type RefObject, useEffect, useMemo, useState } from "react";

export function useOnScreen(ref: RefObject<HTMLElement>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof window === "undefined") {
      return null;
    }
    return new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (ref.current) {
          observer?.unobserve(ref.current);
        }
      }
    });
  }, [ref]);

  useEffect(() => {
    if (observer && ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, observer]);

  return isIntersecting;
}

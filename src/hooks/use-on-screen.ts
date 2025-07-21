
"use client";

import { type RefObject, useEffect, useMemo, useState } from "react";

export function useOnScreen(ref: RefObject<HTMLElement>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      return null;
    }
    return new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
      }
    });
  }, []);

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

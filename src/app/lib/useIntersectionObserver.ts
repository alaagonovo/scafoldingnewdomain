"use client";

import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (margin?: string) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
             observer.disconnect();
        } else {
          setIsVisible(false);
        }
      },
      {
        rootMargin: margin ? `${margin}px` : "200px",
        threshold: 0.01,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [margin]);

  return { isVisible, elementRef };
};

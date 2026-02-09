"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Optional delay in milliseconds for staggered animations */
  delay?: number; 
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add the delay before triggering the animation
          setTimeout(() => {
            setVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { 
        // 0.15 threshold is often better for mobile visibility 
        threshold: 0.15,
        // RootMargin helps trigger the animation slightly before it hits the viewport
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{ 
        transitionDelay: `${delay}ms` 
      }}
      className={`transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1)
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}`}
    >
      {children}
    </div>
  );
}
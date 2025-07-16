// components/FadeInOnScroll.tsx
import { useRef, useEffect, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
  direction?: "left" | "right" | "bottom";
  delay?: number;
};

const FadeInOnScroll = ({ children, direction = "bottom", delay = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  let translateClass = "";
  if (direction === "left") translateClass = "-translate-x-12";
  if (direction === "right") translateClass = "translate-x-12";
  if (direction === "bottom") translateClass = "translate-y-12";

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out 
        ${delay ? `delay-[${delay * 100}ms]` : ""}
        ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translateClass}`}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;

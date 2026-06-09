import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  text: string;
  containerClass?: string;
}

export const AnimatedTitle = ({ text = "", containerClass }: AnimatedTitleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If text is completely missing or empty, skip setting up GSAP animation
    if (!text) return;

    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.fromTo(
        ".animated-word",
        {
          opacity: 0,
          transform: "translate3d(0, 30px, 0) rotateY(15deg) rotateX(15deg)",
        },
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power3.out",
          stagger: 0.03,
          duration: 0.6,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  // Safe runtime check to immediately handle empty strings or missing props smoothly
  if (!text) return null;

  return (
    <div ref={containerRef} className={cn("animated-title flex flex-col gap-1", containerClass)}>
      {text.split("<br />").map((line, lineIdx) => (
        <h1
          key={lineIdx}
          className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-3 max-w-full"
        >
          {line.split(" ").map((word, wordIdx) => (
            <span
              key={`${lineIdx}-${wordIdx}`}
              className="animated-word inline-block opacity-0 will-change-transform"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </h1>
      ))}
    </div>
  );
};

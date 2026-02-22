"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type ParallaxSectionProps = {
  id: string;
  className?: string;
  imagePosition?: string;
  children: React.ReactNode;
};

const PARALLAX_SPEED = 0.15;

export default function ParallaxSection({
  id,
  className = "",
  imagePosition = "object-center",
  children,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const y = rect.top * PARALLAX_SPEED;
        setOffset(y);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={className}
    >
      <div
        className="absolute inset-0 transition-transform duration-100 will-change-transform"
        style={{
          transform: `translate3d(0, ${offset}px, 0)`,
        }}
      >
        <div className="absolute -inset-[10%]">
          <Image
            src="/image.png"
            alt=""
            fill
            className={`object-cover ${imagePosition}`}
            sizes="100vw"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      {children}
    </section>
  );
}

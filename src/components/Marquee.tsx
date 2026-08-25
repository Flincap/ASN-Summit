import React from "react";

interface MarqueeProps {
  /** The row of items. It gets rendered twice so the loop is seamless. */
  children: React.ReactNode;
  direction?: "left" | "right";
  /** Seconds for one full pass. Higher is slower. */
  duration?: number;
  /** Space between items, in pixels. */
  gap?: number;
  className?: string;
}

/**
 * A continuous horizontal scroller. Two identical groups sit side by side and
 * the track slides by exactly one group's width plus one gap, so the seam
 * never shows. Pauses on hover, and holds still for anyone who has asked for
 * reduced motion.
 */
const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "left",
  duration = 60,
  gap = 16,
  className = "",
}) => (
  <div className={`overflow-hidden ${className}`}>
    <div
      className={`flex w-max ${
        direction === "right" ? "animate-slide-right" : "animate-slide-left"
      } hover:[animation-play-state:paused]`}
      style={
        {
          gap: `${gap}px`,
          animationDuration: `${duration}s`,
          "--marquee-gap": `${gap}px`,
        } as React.CSSProperties
      }
    >
      <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
        {children}
      </div>
      <div
        className="flex shrink-0"
        style={{ gap: `${gap}px` }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  </div>
);

export default Marquee;

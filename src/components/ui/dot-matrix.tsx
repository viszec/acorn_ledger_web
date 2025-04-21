"use client";

import { useEffect, useRef, useState } from "react";

interface DotMatrixProps {
  className?: string;
  dotColor?: string;
  dotSize?: number;
  gridSize?: number;
  highlightColor?: string;
  maxHighlightDots?: number;
}

interface DotPosition {
  x: number;
  y: number;
  isHighlighted: boolean;
}

export function DotMatrix({
  className = "",
  dotColor = "#e4d5ff",
  dotSize = 2,
  gridSize = 35,
  maxHighlightDots = 10,
}: DotMatrixProps) {
  const [dots, setDots] = useState<DotPosition[]>([]);
  const highlightedDots = useRef<number[]>([]);

  useEffect(() => {
    const updateDots = () => {
      const container = document.querySelector(`.${className.split(" ")[0]}`);
      if (!container) return;

      const { width, height } = container.getBoundingClientRect();
      const columns = Math.floor(width / gridSize);
      const rows = Math.floor(height / gridSize);
      const totalDots = columns * rows;

      const dotPositions: DotPosition[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          dotPositions.push({
            x: col * gridSize,
            y: row * gridSize,
            isHighlighted: false,
          });
        }
      }

      setDots(dotPositions);

      // 更平滑的点变化逻辑
      highlightedDots.current = Array.from(
        {
          length: Math.min(maxHighlightDots, Math.floor(Math.random() * 6) + 5),
        },
        () => Math.floor(Math.random() * totalDots)
      );

      setDots((prevDots) =>
        prevDots.map((dot, index) => ({
          ...dot,
          isHighlighted: highlightedDots.current.includes(index),
        }))
      );
    };

    updateDots();

    const interval = setInterval(() => {
      const totalDots = dots.length;
      if (totalDots === 0) return;

      highlightedDots.current = Array.from(
        {
          length: Math.min(maxHighlightDots, Math.floor(Math.random() * 6) + 5),
        },
        () => Math.floor(Math.random() * totalDots)
      );

      setDots((prevDots) =>
        prevDots.map((dot, index) => ({
          ...dot,
          isHighlighted: highlightedDots.current.includes(index),
        }))
      );
    }, 3000); // 每3秒更新一次

    const resizeObserver = new ResizeObserver(updateDots);
    const container = document.querySelector(`.${className.split(" ")[0]}`);
    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      clearInterval(interval);
      resizeObserver.disconnect();
    };
  }, [className, gridSize, maxHighlightDots]);

  return (
    <div
      className={className}
      style={{
        background: `radial-gradient(${dotColor}40 ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${gridSize}px ${gridSize}px`,
        backgroundPosition: `${gridSize / 2}px ${gridSize / 2}px`,
        maskImage: "linear-gradient(to right, white, transparent)",
        WebkitMaskImage: "linear-gradient(to right, white, transparent)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {dots
        .filter((dot) => dot.isHighlighted)
        .map((dot, index) => (
          <div
            key={`${dot.x}-${dot.y}-${index}`}
            className="dot-highlight"
            style={{
              position: "absolute",
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              width: `${dotSize * 2}px`,
              height: `${dotSize * 2}px`,
              backgroundColor: "#9333ea",
              boxShadow: `
              0 0 4px #e4d5ff,
              0 0 8px #9333ea,
              0 0 12px #7c3aed,
              0 0 16px #6d28d9
            `,
              transform: "translate(-50%, -50%)",
              transition: "all 0.6s ease-in-out",
              animation: `glow ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s`,
              zIndex: 10,
            }}
          />
        ))}
    </div>
  );
}

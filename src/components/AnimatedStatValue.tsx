"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const formatterCache = new Map<string, Intl.NumberFormat>();

function getFormatter(decimals: number) {
  const key = String(decimals);
  const cached = formatterCache.get(key);

  if (cached) return cached;

  const formatter = new Intl.NumberFormat("de-AT", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  formatterCache.set(key, formatter);

  return formatter;
}

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - (-2 * progress + 2) ** 3 / 2;
}

export function AnimatedStatValue({
  value,
  decimals = 0,
  suffix = "",
  duration = 1800,
  delay = 0,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const hasStarted = useRef(false);
  const formatter = useMemo(() => getFormatter(decimals), [decimals]);
  const [currentValue, setCurrentValue] = useState(0);
  const finalLabel = `${formatter.format(value)}${suffix}`;

  useEffect(() => {
    const element = containerRef.current;
    if (!element || hasStarted.current) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const startAnimation = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;

      timeoutRef.current = window.setTimeout(() => {
        const startedAt = performance.now();
        const animationDuration = prefersReducedMotion ? 1 : duration;

        const tick = (time: number) => {
          const elapsed = time - startedAt;
          const progress = Math.min(elapsed / animationDuration, 1);
          const eased = easeInOutCubic(progress);

          setCurrentValue(value * eased);

          if (progress < 1) {
            frameRef.current = window.requestAnimationFrame(tick);
          } else {
            setCurrentValue(value);
          }
        };

        frameRef.current = window.requestAnimationFrame(tick);
      }, prefersReducedMotion ? 0 : delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -18% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [delay, duration, value]);

  return (
    <span ref={containerRef} aria-label={finalLabel}>
      {formatter.format(currentValue)}
      {suffix}
    </span>
  );
}

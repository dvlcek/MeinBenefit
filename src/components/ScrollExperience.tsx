"use client";

import { useEffect } from "react";

const scrollOffset = 92;

const motionSkipSelector = "[data-motion-skip]";
const sectionSelector = `main:not(${motionSkipSelector}) > section:not(#top):not(${motionSkipSelector}), footer:not(${motionSkipSelector})`;
const revealSelector = [
  ":scope h2",
  ":scope h3",
  ":scope article",
  ":scope table",
  ":scope img",
  ":scope li",
  ":scope [class*='rounded-[18px]']",
  ":scope [class*='rounded-[20px]']",
  ":scope [class*='rounded-[28px]']",
].join(",");

function scrollEase(progress: number) {
  return Math.min(1, 1.001 - 2 ** (-10 * progress));
}

export function ScrollExperience() {
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};

    async function setupMotion() {
      const root = document.documentElement;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        root.dataset.scrollExperience = "reduced";
        return;
      }

      const [{ default: Lenis }, gsapModule, scrollTriggerModule] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      if (disposed) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const canUseSmoothScroll =
        window.matchMedia("(pointer: fine)").matches && navigator.maxTouchPoints === 0;

      const lenis = canUseSmoothScroll
        ? new Lenis({
            duration: 1.28,
            easing: scrollEase,
            smoothWheel: true,
            syncTouch: false,
            touchMultiplier: 1,
            anchors: {
              offset: -scrollOffset,
              duration: 1.05,
              easing: scrollEase,
            },
            prevent: (node) =>
              Boolean(
                node.closest(
                  "input, textarea, select, [data-lenis-prevent], .lead-modal",
                ),
              ),
          })
        : null;

      const updateLenis = (time: number) => {
        lenis?.raf(time * 1000);
      };

      if (lenis) {
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);
      }

      const ctx = gsap.context(() => {
        const heroTargets = gsap.utils.toArray<HTMLElement>(
          "#top h1, #top p, #top a, #top [class*='proofItems'], #top [class*='rounded-full']",
        );

        if (heroTargets.length > 0) {
          gsap.fromTo(
            heroTargets,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.07,
              clearProps: "transform,opacity,visibility",
            },
          );
        }

        const sections = gsap.utils.toArray<HTMLElement>(sectionSelector);

        sections.forEach((section) => {
          const targets = gsap
            .utils
            .toArray<HTMLElement>(section.querySelectorAll(revealSelector))
            .filter((target) => !target.closest(motionSkipSelector));

          if (targets.length === 0) return;

          gsap.set(targets, {
            autoAlpha: 0,
            y: 56,
            force3D: true,
          });

          gsap.to(targets, {
            autoAlpha: 1,
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            stagger: {
              amount: Math.min(0.38, targets.length * 0.055),
              from: "start",
            },
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          });
        });
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      window.setTimeout(refresh, 450);

      root.dataset.scrollExperience = lenis ? "gsap-lenis" : "gsap";

      cleanup = () => {
        window.removeEventListener("load", refresh);
        ctx.revert();

        if (lenis) {
          gsap.ticker.remove(updateLenis);
          lenis.destroy();
        }
      };
    }

    void setupMotion();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return null;
}

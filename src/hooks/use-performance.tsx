import { useEffect, useState } from "react";
import { useIsMobile } from "./use-mobile";

/**
 * Hook to disable animations on mobile devices for better performance
 */
export const useDisableAnimations = () => {
  const isMobile = useIsMobile();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Return true if animations should be disabled
  return isMobile || prefersReducedMotion;
};

/**
 * Get optimized animation variants based on device
 */
export const getOptimizedVariants = (shouldDisable: boolean) => {
  if (shouldDisable) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 0.6 },
  };
};

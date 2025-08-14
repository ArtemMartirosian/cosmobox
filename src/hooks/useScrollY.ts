import { useMemo, useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const useScrollY = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useIsomorphicLayoutEffect(() => {
    const controller = new AbortController();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  const memoizedScrollY = useMemo(() => {
    return scrollY;
  }, [scrollY]);

  return { scrollY: memoizedScrollY };
};

import { useLayoutEffect, useRef, useState, type RefObject } from 'react';

/**
 * Measures a content element against its container and returns a scale factor
 * (≤ 1) that makes the content fit. Recomputes on resize of either element.
 *
 * Usage: render content at its natural/intended size inside `contentRef`,
 * then apply `transform: scale(N) translate(...)` to it.
 */
export function useFitScale(
  containerRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLElement | null>,
): number {
  const [scale, setScale] = useState(1);
  const rafRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    function compute(): void {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) {
        return;
      }
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      // Natural (unscaled) content dimensions. We read scrollWidth/Height
      // because the content may already be transformed.
      const nw = content.scrollWidth;
      const nh = content.scrollHeight;
      if (nw === 0 || nh === 0 || cw === 0 || ch === 0) {
        return;
      }
      const next = Math.min(1, cw / nw, ch / nh);
      setScale((prev) => (Math.abs(prev - next) < 0.005 ? prev : next));
    }

    function schedule(): void {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(compute);
    }

    schedule();
    const ro = new ResizeObserver(schedule);
    if (containerRef.current) {
      ro.observe(containerRef.current);
    }
    if (contentRef.current) {
      ro.observe(contentRef.current);
    }
    return () => {
      ro.disconnect();
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [containerRef, contentRef]);

  return scale;
}

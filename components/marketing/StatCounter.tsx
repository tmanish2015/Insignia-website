'use client';
import { useEffect, useRef, useState } from 'react';

export function StatCounter({ target, suffix = '+', label }: { target: number; suffix?: string; label: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !counted.current) {
          counted.current = true;
          const dur = 1200, t0 = performance.now();
          function step(now: number) {
            const p = Math.min((now - t0) / dur, 1);
            setValue(target * p);
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center px-3 py-7 border border-border rounded-md bg-surface2">
      <div className="text-[38px] font-black text-fg tracking-tight">{(target % 1 === 0 ? Math.round(value) : value.toFixed(1))}{suffix}</div>
      <div className="text-[13px] text-fg-soft font-semibold mt-1.5">{label}</div>
    </div>
  );
}

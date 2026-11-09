import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const GLYPHS = '!<>-_\\/[]{}=+*^?#';
const ARABIC_PATTERN = /[\u0600-\u06FF]/;

function scrambleFrame(target: string, progress: number): string {
  return target
    .split('')
    .map((char, index) => {
      if (char === ' ') return ' ';
      const resolveAt = (index / target.length) * 0.6 + 0.3;
      if (progress >= resolveAt) return char;
      return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    })
    .join('');
}

export function useScramble(target: string, trigger: number, duration = 700): string {
  const reduced = usePrefersReducedMotion();
  const enabled = !reduced && !ARABIC_PATTERN.test(target);
  const [text, setText] = useState(target);

  useEffect(() => {
    if (!enabled || trigger === 0) {
      setText(target);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setText(progress >= 1 ? target : scrambleFrame(target, progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [target, trigger, enabled, duration]);

  return text;
}

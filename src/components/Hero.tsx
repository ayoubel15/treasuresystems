import { useRef, type PointerEvent as ReactPointerEvent } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, MoveHorizontal } from 'lucide-react';
import BackgroundMedia from '@/components/BackgroundMedia';
import { ScrambleIn } from '@/components/ScrambleText';
import { useLanguage } from '@/hooks/useLanguage';
import { useVideoScrub } from '@/hooks/useVideoScrub';
import { VIDEOS } from '@/lib/media';

type HeroProps = {
  onBook: () => void;
};

export default function Hero({ onBook }: HeroProps) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrubBy } = useVideoScrub(videoRef);
  const draggingRef = useRef(false);
  const lastXRef = useRef<number | null>(null);
  const hasVideo = VIDEOS.hero !== '';

  const updateGlow = (event: ReactPointerEvent<HTMLElement>) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    section.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    section.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    updateGlow(event);
    if (!hasVideo) return;
    if (event.pointerType !== 'mouse' && !draggingRef.current) return;
    const lastX = lastXRef.current;
    lastXRef.current = event.clientX;
    if (lastX !== null) scrubBy(event.clientX - lastX);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    draggingRef.current = true;
    lastXRef.current = event.clientX;
  };

  const resetPointer = () => {
    draggingRef.current = false;
    lastXRef.current = null;
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={resetPointer}
      onPointerCancel={resetPointer}
      onPointerLeave={resetPointer}
      className="relative flex min-h-screen touch-pan-y select-none items-center overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-20"
    >
      <BackgroundMedia src={VIDEOS.hero} videoRef={videoRef} loop={false} autoPlay={false} />
      {!hasVideo && <div aria-hidden="true" className="pointer-glow" />}

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-light sm:text-sm"
        >
          <span aria-hidden="true" className="h-px w-10 bg-emerald" />
          <ScrambleIn text={t.hero.label} />
        </motion.p>

        <h1 className="font-display flex flex-col text-[clamp(3.25rem,11vw,10.5rem)] uppercase leading-[0.95] text-cream">
          <span className="block text-start">
            <ScrambleIn text={t.hero.line1} />
          </span>
          <span className="block text-end text-emerald">
            <ScrambleIn text={t.hero.line2} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 max-w-xl text-base leading-[1.5] text-cream/80 sm:text-lg"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-10"
        >
          <button
            type="button"
            onClick={onBook}
            className="inline-flex items-center gap-3 rounded-full bg-emerald px-7 py-4 text-sm font-bold text-ink transition-all duration-300 hover:bg-emerald-light hover:shadow-[0_0_32px_rgba(25,219,146,0.45)]"
          >
            <CalendarCheck className="h-4 w-4" />
            {t.hero.cta}
          </button>
        </motion.div>
      </div>

      {hasVideo && (
        <p className="absolute bottom-8 start-6 z-10 flex items-center gap-2 text-xs text-cream/60 sm:start-10 lg:start-20">
          <MoveHorizontal className="h-4 w-4" />
          {t.hero.scrollHint}
        </p>
      )}
    </section>
  );
}

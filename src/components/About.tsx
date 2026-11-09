import { useRef } from 'react';
import { motion, useMotionTemplate, useScroll, useTransform, type MotionValue } from 'framer-motion';
import BackgroundMedia from '@/components/BackgroundMedia';
import { useLanguage } from '@/hooks/useLanguage';
import { VIDEOS } from '@/lib/media';

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const words = t.about.text.split(' ');
  const founderOpacity = useTransform(scrollYProgress, [0.82, 0.97], [0, 1]);
  const founderY = useTransform(scrollYProgress, [0.82, 0.97], [24, 0]);

  return (
    <section id="about" ref={sectionRef} className="relative h-[240vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 sm:px-10 lg:px-20">
        <BackgroundMedia src={VIDEOS.about} />

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <p
            className="text-2xl font-normal leading-[1.6] text-cream sm:text-4xl lg:text-5xl"
            style={{ perspective: '900px' }}
          >
            {words.map((word, index) => (
              <Word
                key={`${word}-${index}`}
                word={word}
                index={index}
                total={words.length}
                progress={scrollYProgress}
              />
            ))}
          </p>

          <motion.p
            style={{ opacity: founderOpacity, y: founderY }}
            className="font-display mt-10 text-lg uppercase tracking-[0.15em] text-emerald-light sm:text-2xl"
          >
            {t.about.founder}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

type WordProps = {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function Word({ word, index, total, progress }: WordProps) {
  const start = (index / total) * 0.8;
  const end = start + 0.2;

  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const y = useTransform(progress, [start, end], [18, 0]);
  const rotateX = useTransform(progress, [start, end], [-65, 0]);
  const blur = useTransform(progress, [start, end], [8, 0]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.span
      style={{ opacity, y, rotateX, filter, transformOrigin: '50% 100%' }}
      className="me-[0.3em] inline-block will-change-transform"
    >
      {word}
    </motion.span>
  );
}

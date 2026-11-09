import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import BackgroundMedia from '@/components/BackgroundMedia';
import { VIDEOS } from '@/lib/media';

export default function Metrics() {
  const { t } = useLanguage();

  return (
    <section id="metrics" className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10">
      <BackgroundMedia src={VIDEOS.metrics} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-cream/15 bg-cream/15 md:grid-cols-3">
        {t.metrics.items.map((item, index) => (
          <motion.div
            key={item.value}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="flex flex-col justify-between gap-10 bg-ink/85 p-8 backdrop-blur-sm sm:p-10"
          >
            <p className="font-display flex flex-col text-7xl leading-none text-emerald sm:text-8xl">
              {item.prefix && (
                <span className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-cream/70">
                  {item.prefix}
                </span>
              )}
              {item.value}
            </p>
            <p className="text-base leading-[1.5] text-cream/85">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

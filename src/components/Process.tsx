import { motion } from 'framer-motion';
import BackgroundMedia from '@/components/BackgroundMedia';
import { useLanguage } from '@/hooks/useLanguage';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-6 py-24 sm:px-10">
      <BackgroundMedia src="" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <h2 className="font-display text-5xl uppercase text-cream sm:text-7xl">{t.process.heading}</h2>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.process.steps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col gap-4 rounded-2xl border border-cream/10 bg-forest/40 p-6 transition-colors duration-300 hover:border-emerald"
            >
              <span className="font-display text-5xl leading-none text-emerald">{step.number}</span>
              <h3 className="font-display text-xl uppercase text-cream sm:text-2xl">{step.title}</h3>
              <p className="text-sm leading-[1.5] text-cream/75">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

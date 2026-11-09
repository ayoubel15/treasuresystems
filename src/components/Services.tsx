import { motion } from 'framer-motion';
import { Bot, Cpu, Target, Workflow } from 'lucide-react';
import BackgroundMedia from '@/components/BackgroundMedia';
import { useLanguage } from '@/hooks/useLanguage';
import { VIDEOS } from '@/lib/media';

const ICONS = [Bot, Target, Cpu, Workflow];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-6 py-24 sm:px-10">
      <BackgroundMedia src={VIDEOS.services} />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <h2 className="font-display text-5xl uppercase text-cream sm:text-7xl">{t.services.heading}</h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <motion.article
                key={item.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col gap-6 rounded-2xl border border-cream/10 bg-ink/75 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-emerald"
              >
                <Icon className="h-8 w-8 text-emerald transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-light">{item.tag}</p>
                  <h3 className="font-display mt-2 text-2xl uppercase text-cream">{item.title}</h3>
                </div>
                <p className="text-sm leading-[1.5] text-cream/75">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

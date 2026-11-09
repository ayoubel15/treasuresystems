import { ArrowUpRight } from 'lucide-react';
import BackgroundMedia from '@/components/BackgroundMedia';
import { useLanguage } from '@/hooks/useLanguage';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-6 py-24 sm:px-10">
      <BackgroundMedia src="" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <h2 className="font-display text-5xl uppercase text-cream sm:text-7xl">{t.projects.heading}</h2>

        <ul className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
          {t.projects.items.map((item, index) => (
            <li
              key={item.name}
              className="group grid gap-4 py-8 transition-colors duration-300 hover:bg-cream/[0.03] md:grid-cols-[4rem_1.1fr_2fr_auto] md:items-center md:px-4"
            >
              <span className="font-mono text-sm text-emerald">{String(index + 1).padStart(2, '0')}</span>

              <div>
                <h3 className="font-display text-3xl uppercase text-cream sm:text-4xl">{item.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/60">{item.type}</p>
              </div>

              <div>
                <p className="text-sm leading-[1.5] text-cream/80">{item.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/75">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:justify-self-end">
                {item.inProgress ? (
                  <span className="inline-flex rounded-full border border-emerald/50 bg-emerald/10 px-3 py-1.5 text-xs text-emerald-light">
                    {t.projects.inProgress}
                  </span>
                ) : (
                  item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-sm text-cream transition-colors duration-300 hover:border-emerald hover:text-emerald-light"
                    >
                      {t.projects.visit}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-cream/60">{t.projects.footnote}</p>
      </div>
    </section>
  );
}

import { ArrowUpLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-20 bg-paper px-5 py-20 text-ink sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="eyebrow text-forest">{t.nav.work}</p>
          <h2 className="font-display mt-5 text-4xl leading-tight sm:text-5xl">{t.projects.heading}</h2>
          <p className="mt-5 text-sm leading-7 text-ink/70">{t.projects.footnote}</p>
        </div>
        <ul className="divide-y divide-ink/15 border-y border-ink/15">
          {t.projects.items.map((item, index) => (
            <li key={item.name} className="grid gap-4 py-6 sm:grid-cols-[3rem_0.8fr_1.2fr_auto] sm:items-center sm:gap-5">
              <span className="font-display text-sm text-forest">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-1 text-xs text-ink/70">{item.type}</p>
              </div>
              <div>
                <p className="text-sm leading-7 text-ink/80">{item.description}</p>
                <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink/70">
                  {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="button-text">
                  {t.projects.visit}
                  <ArrowUpLeft aria-hidden="true" className="h-4 w-4" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

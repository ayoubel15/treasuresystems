import { useState } from 'react';
import { ArrowDownLeft, Check, MessageSquareText, PackageCheck } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Demonstration() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeView = t.demo.tabs[activeIndex];

  return (
    <section id="demo" className="scroll-mt-20 bg-[#E8EEE8] px-5 py-20 text-ink sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-forest">{t.demo.eyebrow}</p>
            <h2 className="font-display mt-5 text-4xl leading-tight sm:text-5xl">{t.demo.heading}</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-ink/70">{t.demo.description}</p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-ink/15 pt-6 lg:grid-cols-[0.62fr_1.38fr] lg:gap-12 lg:pt-8">
          <div>
            <div role="tablist" aria-label={t.demo.eyebrow} className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {t.demo.tabs.map((tab, index) => (
                <button
                  key={tab.label}
                  id={`demo-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-controls="demo-panel"
                  onClick={() => setActiveIndex(index)}
                  className={`min-h-11 shrink-0 border-b-2 px-2 py-3 text-start text-sm font-medium transition-colors lg:w-full lg:border-b-0 lg:border-s-2 lg:px-4 ${
                    activeIndex === index
                      ? 'border-primary text-forest lg:bg-white/70'
                      : 'border-transparent text-ink/70 hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <p className="mt-7 flex items-start gap-3 text-xs leading-6 text-ink/70 lg:mt-12">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-ink/25"><Check aria-hidden="true" className="h-3 w-3" /></span>
              {t.demo.disclaimer}
            </p>
          </div>

          <div id="demo-panel" role="tabpanel" aria-labelledby={`demo-tab-${activeIndex}`} className="min-w-0 bg-white p-4 shadow-[0_20px_60px_rgba(8,10,9,0.08)] sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-5">
              <div>
                <p className="text-xs uppercase text-ink/70">TREASURE SYSTEMS · SAMPLE WORKFLOW</p>
                <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{activeView.title}</h3>
              </div>
              <span className="inline-flex items-center gap-2 border border-forest/20 px-3 py-2 text-xs text-forest">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {activeView.status}
              </span>
            </div>

            <div className="grid gap-6 py-6 md:grid-cols-[1fr_0.8fr] md:gap-8">
              <div className="flex min-h-48 flex-col justify-end gap-3 bg-[#F0F3EF] p-4 sm:min-h-56 sm:p-5">
                <div className="flex items-center gap-2 text-xs text-ink/70"><MessageSquareText aria-hidden="true" className="h-4 w-4" />{t.hero.demoCustomer}</div>
                <p className="w-fit max-w-[90%] bg-white p-3 text-sm leading-6">{activeView.customer}</p>
                <p className="ms-auto w-fit max-w-[94%] bg-[#DDEBE1] p-3 text-sm leading-6">{activeView.response}</p>
              </div>
              <div className="flex flex-col justify-between border-s-2 border-forest/20 ps-5">
                <div className="flex items-center gap-2 text-forest"><PackageCheck aria-hidden="true" className="h-5 w-5" /><span className="text-sm font-semibold">{t.hero.demoOrder}</span></div>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="eyebrow text-ink/70">{t.demo.problemLabel}</dt>
                    <dd className="mt-1 text-sm leading-6 text-ink/80">{activeView.problem}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-ink/70">{t.demo.automationLabel}</dt>
                    <dd className="mt-1 text-sm leading-6 text-ink/80">{activeView.automation}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-ink/70">{t.demo.changeLabel}</dt>
                    <dd className="mt-1 text-sm leading-6 text-ink/80">{activeView.change}</dd>
                  </div>
                </dl>
                <a href="#contact" className="button-text mt-6 text-sm">
                  {t.nav.contact}
                  <ArrowDownLeft aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { ArrowDownLeft, ArrowLeft, Check, MessageCircle, PackageCheck } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="bg-paper px-5 pb-16 pt-12 text-ink sm:px-8 sm:pb-24 lg:px-12 lg:pt-16">
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 text-forest">{t.hero.label}</p>
          <h1 className="font-display text-5xl leading-[1.08] text-ink sm:text-6xl lg:text-7xl">
            <span className="block">{t.hero.line1}</span>
            <span className="mt-1 block text-forest">{t.hero.line2}</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-ink/75 sm:text-lg sm:leading-9">{t.hero.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="button-primary">
              {t.hero.cta}
              <ArrowDownLeft aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href="#demo" className="button-text">
              {t.hero.secondary}
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute -end-3 -top-3 h-full w-full border border-forest/20 sm:-end-5 sm:-top-5" aria-hidden="true" />
          <div className="relative bg-white p-4 shadow-[0_24px_70px_rgba(8,10,9,0.12)] sm:p-6">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-forest text-white"><MessageCircle aria-hidden="true" className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.hero.demoLabel}</p>
                  <p className="mt-1 text-xs text-ink/70">{t.hero.demoChannel}</p>
                </div>
              </div>
              <span className="flex items-center gap-2 text-xs text-forest"><span className="h-2 w-2 rounded-full bg-primary" />{t.hero.demoStatus}</span>
            </div>

            <div className="grid gap-5 py-5 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="flex min-h-52 flex-col justify-end gap-3 bg-[#F0F3EF] p-4">
                <p className="text-[11px] font-semibold uppercase text-ink/70">{t.hero.demoCustomer}</p>
                <p className="max-w-[90%] bg-white p-3 text-sm leading-6 text-ink">{t.hero.demoMessage}</p>
                <p className="ms-auto max-w-[94%] bg-[#DDEBE1] p-3 text-sm leading-6 text-ink">{t.hero.demoReply}</p>
              </div>
              <div className="flex flex-col justify-between border border-ink/10 p-4">
                <div>
                  <div className="mb-5 flex items-center gap-2 text-forest"><PackageCheck aria-hidden="true" className="h-5 w-5" /><p className="text-sm font-semibold">{t.hero.demoOrder}</p></div>
                  <p className="font-semibold text-ink">{t.hero.demoProduct}</p>
                  <p className="mt-2 text-sm text-ink/65">{t.hero.demoSize}</p>
                  <p className="mt-1 text-sm text-ink/65">{t.hero.demoDestination}</p>
                </div>
                <p className="mt-6 flex items-center gap-2 border-t border-ink/10 pt-4 text-xs text-forest"><Check aria-hidden="true" className="h-4 w-4" />{t.hero.demoStatus}</p>
              </div>
            </div>
          <p className="text-[11px] leading-5 text-ink/70">{t.hero.demoDisclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

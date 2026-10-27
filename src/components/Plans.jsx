import { ArrowRight, Check, Info, Sparkles } from 'lucide-react';
import { PLANS } from '../data/site.js';

const priceFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

export default function Plans({ plans = PLANS }) {
  return (
    <section id="planes" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Choose your level
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Planes simples, sin vidas extra
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco. Cambiá de nivel cuando
              quieras, sin penalidades.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600">
            <Sparkles className="h-3.5 w-3.5 text-cyan-700" aria-hidden="true" />
            Precios de referencia · demo
          </span>
        </div>

        {plans.length === 0 ? (
          <div
            role="status"
            className="mt-10 flex items-start gap-3 rounded-2xl bg-slate-50 p-6 text-slate-600 ring-1 ring-slate-200"
          >
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />
            <p className="text-sm">
              Estamos armando los planes. Volvé pronto para ver las coberturas disponibles.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const highlighted = Boolean(plan.highlighted);
              return (
                <article
                  key={plan.id}
                  className={
                    highlighted
                      ? 'relative flex flex-col rounded-2xl bg-slate-950 p-7 text-slate-100 ring-1 ring-cyan-400/40 shadow-xl shadow-cyan-500/10 transition hover:-translate-y-1'
                      : 'relative flex flex-col rounded-2xl bg-white p-7 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-md'
                  }
                >
                  {highlighted && (
                    <span className="absolute right-6 top-6 rounded-full bg-cyan-400 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-950">
                      Más elegido
                    </span>
                  )}
                  <p
                    className={
                      highlighted
                        ? 'font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-300'
                        : 'font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-700'
                    }
                  >
                    {plan.level}
                  </p>
                  <h3
                    className={
                      highlighted
                        ? 'mt-2 text-2xl font-bold tracking-tight text-white'
                        : 'mt-2 text-2xl font-bold tracking-tight text-slate-900'
                    }
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={
                      highlighted ? 'mt-1 text-sm text-slate-400' : 'mt-1 text-sm text-slate-500'
                    }
                  >
                    {plan.tagline}
                  </p>

                  <p className="mt-6 flex items-baseline gap-1">
                    <span
                      className={
                        highlighted
                          ? 'text-3xl font-bold tracking-tight text-white'
                          : 'text-3xl font-bold tracking-tight text-slate-900'
                      }
                    >
                      {priceFormatter.format(plan.price)}
                    </span>
                    <span
                      className={highlighted ? 'text-sm text-slate-400' : 'text-sm text-slate-500'}
                    >
                      /mes
                    </span>
                  </p>

                  <ul
                    className={
                      highlighted
                        ? 'mt-6 flex-1 space-y-2.5 border-t border-white/10 pt-5 text-sm text-slate-300'
                        : 'mt-6 flex-1 space-y-2.5 border-t border-slate-100 pt-5 text-sm text-slate-700'
                    }
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          className={
                            highlighted
                              ? 'mt-0.5 h-4 w-4 shrink-0 text-cyan-300'
                              : 'mt-0.5 h-4 w-4 shrink-0 text-cyan-600'
                          }
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#cotizador"
                    className={
                      highlighted
                        ? 'mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'
                        : 'mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-cyan-600 hover:text-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2'
                    }
                  >
                    Cotizar {plan.name}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

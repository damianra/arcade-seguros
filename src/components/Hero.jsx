import { ArrowRight, Check, Gamepad2, HeartPulse, ShieldCheck, Sparkles, Trophy } from 'lucide-react';
import { SITE, STATS } from '../data/site.js';
import Icon from './Icon.jsx';

const BARS = [
  { label: 'Hogar', value: 82 },
  { label: 'Auto', value: 68 },
  { label: 'Vida', value: 54 },
];

export default function Hero({ site = SITE, stats = STATS }) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="arcade-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              <Gamepad2 className="h-3.5 w-3.5" aria-hidden="true" />
              Insert coin · Est. 1984
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Tu tranquilidad,
              <span className="block text-cyan-300">en modo arcade.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
              {site.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#planes"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Ver planes
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Cómo funciona
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <li className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                Sin letra chica
              </li>
              <li className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                Alta en 2 minutos
              </li>
              <li className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                Cancelás cuando quieras
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-300">
                  Partida en curso
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-200">
                  <Trophy className="h-3 w-3" aria-hidden="true" />
                  Tier 2
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cyan-400/15 text-cyan-300 ring-1 ring-inset ring-cyan-400/30">
                  <ShieldCheck className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Cobertura activa</p>
                  <p className="text-xl font-bold tracking-tight text-white">Plan Player</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {BARS.map((bar) => (
                  <div key={bar.label}>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      <span>{bar.label}</span>
                      <span className="text-cyan-300">{bar.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Guardado automático
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-cyan-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" aria-hidden="true" />
                  OK
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <HeartPulse className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-slate-300">
                Asistencia todos los días, incluso cuando el resto del mundo hace pausa.
              </p>
            </div>
          </div>
        </div>

        {stats.length > 0 && (
          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-cyan-300 ring-1 ring-inset ring-white/10">
                  <Icon name={stat.icon} className="h-4 w-4" />
                </span>
                <div>
                  <dd className="text-lg font-bold tracking-tight text-white">
                    {stat.value}
                    <span className="ml-1 text-[11px] font-medium uppercase tracking-widest text-slate-400">
                      {stat.suffix}
                    </span>
                  </dd>
                  <dt className="text-xs text-slate-400">{stat.label}</dt>
                </div>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}

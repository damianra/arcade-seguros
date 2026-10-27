import { STEPS } from '../data/site.js';
import Icon from './Icon.jsx';

export default function HowItWorks({ steps = STEPS }) {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">
            Press start
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tres pasos y estás jugando
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse. Sin sucursales, sin
            filas y sin papeles.
          </p>
        </div>

        {steps.length > 0 && (
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-950 text-cyan-300">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-2xl font-bold tracking-tight text-slate-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

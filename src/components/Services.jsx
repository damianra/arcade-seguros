import { Check, Info } from 'lucide-react';
import { SERVICES } from '../data/site.js';
import Icon from './Icon.jsx';

export default function Services({ services = SERVICES }) {
  return (
    <section id="coberturas" className="scroll-mt-20 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700">
            Select your player
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Coberturas para cada nivel
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elegí qué querés proteger y
            sumá los refuerzos que necesites.
          </p>
        </div>

        {services.length === 0 ? (
          <div
            role="status"
            className="mt-10 flex items-start gap-3 rounded-2xl bg-white p-6 text-slate-600 ring-1 ring-slate-200"
          >
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" aria-hidden="true" />
            <p className="text-sm">
              Todavía no hay coberturas publicadas. Estamos preparando la próxima actualización.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-50 text-cyan-700 ring-1 ring-inset ring-cyan-100">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-700">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

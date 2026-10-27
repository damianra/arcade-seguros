import { useMemo, useState } from 'react';
import { Calculator, CheckCircle2, Info, Sparkles } from 'lucide-react';
import { PLANS } from '../data/site.js';

const priceFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

const inputClasses =
  'w-full rounded-lg border-0 bg-slate-900 px-4 py-3 text-sm text-white ring-1 ring-inset ring-slate-700 transition placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400';

export default function QuoteSimulator({ plans = PLANS }) {
  const [planId, setPlanId] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.id === planId) ?? null,
    [plans, planId],
  );
  const ageNumber = Number(age);
  const ageIsValid = age !== '' && Number.isInteger(ageNumber) && ageNumber >= 18 && ageNumber <= 99;
  const isValid = Boolean(selectedPlan) && ageIsValid;

  function handlePlanChange(event) {
    setPlanId(event.target.value);
    setResult(null);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
    setResult(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;
    const surcharge = ageNumber <= 30 ? 0 : ageNumber <= 50 ? 0.1 : 0.25;
    const estimate = Math.round((selectedPlan.price * (1 + surcharge)) / 100) * 100;
    setResult({ plan: selectedPlan, estimate });
  }

  return (
    <section id="cotizador" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 ring-1 ring-slate-800">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Continue? 10… 9… 8…
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Cotizador express
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
                Elegí un plan y tu edad para ver una estimación al instante. Es un cálculo de
                demostración: no genera una póliza ni te contacta con nadie.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  Sin datos personales
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  Resultado en el momento
                </li>
              </ul>
            </div>

            {plans.length === 0 ? (
              <div
                role="status"
                className="flex items-start gap-3 rounded-2xl bg-slate-900 p-6 text-slate-300 ring-1 ring-slate-800"
              >
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                <p className="text-sm">
                  El cotizador no está disponible porque todavía no hay planes cargados.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800">
                <div className="grid gap-5">
                  <div>
                    <label htmlFor="cotizador-plan" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Cobertura
                    </label>
                    <select
                      id="cotizador-plan"
                      value={planId}
                      onChange={handlePlanChange}
                      className={inputClasses}
                    >
                      <option value="">Elegí tu cobertura</option>
                      {plans.map((plan) => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name} · {plan.level}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cotizador-edad" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Edad del titular
                    </label>
                    <input
                      id="cotizador-edad"
                      type="number"
                      inputMode="numeric"
                      min="18"
                      max="99"
                      placeholder="Entre 18 y 99"
                      value={age}
                      onChange={handleAgeChange}
                      className={inputClasses}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400 disabled:hover:bg-slate-700"
                  >
                    <Calculator className="h-4 w-4" aria-hidden="true" />
                    Calcular cuota
                  </button>

                  {result ? (
                    <div role="status" aria-live="polite" className="rounded-xl bg-cyan-400/10 p-4 ring-1 ring-inset ring-cyan-400/30">
                      <p className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        Plan {result.plan.name} · {priceFormatter.format(result.estimate)} /mes
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Estimación de demostración. No incluye impuestos ni descuentos.
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500">
                      Completá cobertura y edad para habilitar el cálculo.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowUp, ShieldCheck } from 'lucide-react';
import { NAV_LINKS, SITE } from '../data/site.js';

export default function Footer({ links = NAV_LINKS, site = SITE }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-400 text-slate-950">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-white">
                {site.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{site.claim}</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Sitio de demostración. Coberturas, precios y datos son ficticios.
            </p>
          </div>

          <nav aria-label="Enlaces del pie" className="flex flex-col gap-3">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Secciones
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition hover:text-cyan-300 focus:outline-none focus-visible:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#inicio"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            Volver arriba
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p className="font-mono uppercase tracking-[0.18em] text-slate-600">Insert coin to continue</p>
        </div>
      </div>
    </footer>
  );
}

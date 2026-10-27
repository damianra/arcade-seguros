import { Joystick, ShieldCheck } from 'lucide-react';
import { NAV_LINKS, SITE } from '../data/site.js';

export default function Navbar({ links = NAV_LINKS, site = SITE }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#inicio"
          className="group flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/30 transition group-hover:bg-cyan-300">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-white">
              {site.name}
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-cyan-300/80">
              {site.tagline}
            </span>
          </span>
        </a>

        <nav aria-label="Secciones" className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300 focus:outline-none focus-visible:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cotizador"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <Joystick className="h-4 w-4" aria-hidden="true" />
          Jugar ahora
        </a>
      </div>
    </header>
  );
}

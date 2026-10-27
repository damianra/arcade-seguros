import { render, screen, within } from '@testing-library/react';
import App from '../App.jsx';
import { NAV_LINKS, PLANS, SERVICES } from '../data/site.js';

describe('landing — secciones principales', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renderiza el contenedor principal', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('muestra la navbar con el nombre del sitio y los links de ancla', () => {
    const banner = screen.getByRole('banner');
    expect(within(banner).getByText('Arcade Seguros')).toBeInTheDocument();

    const nav = screen.getByRole('navigation', { name: 'Secciones' });
    for (const link of NAV_LINKS) {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.href,
      );
    }
  });

  test('el hero muestra el titular y el CTA hacia los planes', () => {
    expect(screen.getByRole('heading', { level: 1, name: /tu tranquilidad/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ver planes/i })).toHaveAttribute('href', '#planes');
  });

  test('renderiza las secciones de coberturas, planes, pasos y cotizador', () => {
    expect(screen.getByRole('heading', { name: /coberturas para cada nivel/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /planes simples/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /tres pasos/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /cotizador express/i })).toBeInTheDocument();

    for (const id of ['#coberturas', '#planes', '#como-funciona', '#cotizador']) {
      expect(document.querySelector(id)).not.toBeNull();
    }
  });

  test('lista todas las coberturas y planes de los datos', () => {
    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument();
    }
    for (const plan of PLANS) {
      expect(screen.getByRole('heading', { name: plan.name })).toBeInTheDocument();
    }
  });

  test('renderiza el footer con la nota de sitio de demostración', () => {
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/sitio de demostración/i)).toBeInTheDocument();
  });

  test('ningún link de la página queda con href vacío', () => {
    const links = [...document.querySelectorAll('a')];
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link.getAttribute('href')?.trim()).toBeTruthy();
    }
  });
});

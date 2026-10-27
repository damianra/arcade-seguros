import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Navbar from '../components/Navbar.jsx';
import Plans from '../components/Plans.jsx';
import QuoteSimulator from '../components/QuoteSimulator.jsx';
import Services from '../components/Services.jsx';
import Icon from '../components/Icon.jsx';

describe('estados de fallback con datos vacíos', () => {
  test('el menú de planes muestra un aviso informativo en lugar de una lista vacía', () => {
    render(<Plans plans={[]} />);

    expect(screen.getByRole('heading', { name: /planes simples/i })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(/estamos armando los planes/i);
    expect(screen.queryAllByRole('article')).toHaveLength(0);
  });

  test('coberturas vacías muestran fallback y dejan el título de la sección', () => {
    render(<Services services={[]} />);

    expect(screen.getByRole('heading', { name: /coberturas para cada nivel/i })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(/todavía no hay coberturas/i);
    expect(screen.queryAllByRole('article')).toHaveLength(0);
  });

  test('los pasos vacíos no rompen la sección ni dejan listas huérfanas', () => {
    render(<HowItWorks steps={[]} />);

    expect(screen.getByRole('heading', { name: /tres pasos/i })).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  test('el cotizador sin planes muestra fallback y oculta el formulario', () => {
    render(<QuoteSimulator plans={[]} />);

    expect(screen.getByRole('status')).toHaveTextContent(/cotizador no está disponible/i);
    expect(document.querySelector('form')).toBeNull();
  });

  test('el hero sin estadísticas sigue renderizando el titular sin la grilla de datos', () => {
    const { container } = render(<Hero stats={[]} />);

    expect(screen.getByRole('heading', { level: 1, name: /tu tranquilidad/i })).toBeInTheDocument();
    expect(container.querySelector('dl')).toBeNull();
  });

  test('la navbar sin links no rompe y mantiene marca y CTA', () => {
    render(<Navbar links={[]} />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Arcade Seguros')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Secciones' })).toBeEmptyDOMElement();
    expect(screen.getByRole('link', { name: /jugar ahora/i })).toHaveAttribute('href', '#cotizador');
  });

  test('un ícono desconocido cae en un ícono genérico de lucide', () => {
    const { container } = render(<Icon name="no-existe" />);

    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });
});

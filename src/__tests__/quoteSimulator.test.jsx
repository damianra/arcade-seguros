import { fireEvent, render, screen } from '@testing-library/react';
import QuoteSimulator from '../components/QuoteSimulator.jsx';

function completar(planId = 'player', edad = '40') {
  fireEvent.change(screen.getByLabelText(/cobertura/i), { target: { value: planId } });
  fireEvent.change(screen.getByLabelText(/edad del titular/i), { target: { value: edad } });
}

describe('cotizador — acción habilitada solo con datos válidos', () => {
  test('el botón de calcular arranca deshabilitado', () => {
    render(<QuoteSimulator />);

    expect(screen.getByRole('button', { name: /calcular cuota/i })).toBeDisabled();
    expect(screen.getByText(/completá cobertura y edad/i)).toBeInTheDocument();
  });

  test('sigue deshabilitado con una edad fuera de rango', () => {
    render(<QuoteSimulator />);
    completar('player', '15');

    expect(screen.getByRole('button', { name: /calcular cuota/i })).toBeDisabled();
  });

  test('se habilita al elegir plan y una edad válida y muestra la estimación', () => {
    render(<QuoteSimulator />);
    completar('player', '40');

    const button = screen.getByRole('button', { name: /calcular cuota/i });
    expect(button).toBeEnabled();

    fireEvent.click(button);

    expect(screen.getByRole('status')).toHaveTextContent(/plan player/i);
    expect(screen.getByRole('status')).toHaveTextContent(/\/mes/i);
  });

  test('volver a cambiar los campos limpia el resultado anterior', () => {
    render(<QuoteSimulator />);
    completar('player', '40');
    fireEvent.click(screen.getByRole('button', { name: /calcular cuota/i }));
    expect(screen.getByRole('status')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/edad del titular/i), { target: { value: '41' } });

    expect(screen.queryByRole('status')).toBeNull();
  });
});

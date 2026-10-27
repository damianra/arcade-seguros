import { test, expect } from '@playwright/test';

test.describe('landing — carga inicial', () => {
  test('la página carga sin errores de consola ni excepciones', async ({ page }) => {
    const consoleErrors = [];
    const pageErrors = [];

    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('pageerror', (error) => pageErrors.push(error.message));

    const response = await page.goto('/');
    expect(response?.ok(), 'la respuesta del dev server debe ser 2xx').toBeTruthy();

    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('#root')).not.toBeEmpty();
    await expect(page).toHaveTitle(/arcade seguros/i);

    // Espera a que se estabilicen efectos de montaje antes de evaluar errores.
    await page.waitForLoadState('networkidle');

    expect(pageErrors, 'no debe haber excepciones sin capturar').toEqual([]);
    expect(consoleErrors, 'no debe haber errores en la consola').toEqual([]);
  });

  test('mantiene un único h1 y el hero se renderiza completo', async ({ page }) => {
    await page.goto('/');

    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toHaveCount(1);
    await expect(h1).toBeVisible();
    await expect(h1).toContainText(/tu tranquilidad/i);
    await expect(page.getByText(/insert coin/i).first()).toBeVisible();
  });
});

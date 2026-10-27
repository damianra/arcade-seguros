import { test, expect } from '@playwright/test';

test.describe('landing — reglas de UI en el cotizador', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#cotizador')).toBeAttached();
  });

  test('el botón de calcular empieza deshabilitado y solo se habilita con datos válidos', async ({
    page,
  }) => {
    const submit = page.getByRole('button', { name: /calcular cuota/i });
    await expect(submit).toBeDisabled();

    await page.locator('#cotizador-edad').fill('30');
    await expect(submit).toBeDisabled();

    await page.locator('#cotizador-edad').fill('10');
    await page.locator('#cotizador-plan').selectOption('player');
    await expect(submit).toBeDisabled();

    await page.locator('#cotizador-edad').fill('30');
    await expect(submit).toBeEnabled();
  });

  test('muestra el resultado solo después de enviar el formulario', async ({ page }) => {
    const result = page.locator('#cotizador [role="status"]');

    await page.locator('#cotizador-plan').selectOption('player');
    await page.locator('#cotizador-edad').fill('30');
    await expect(page.getByText(/completá cobertura y edad/i)).toBeVisible();
    await expect(result).toHaveCount(0);

    await page.getByRole('button', { name: /calcular cuota/i }).click();

    await expect(result).toBeVisible();
    await expect(result).toContainText(/plan player/i);
    await expect(result).toContainText(/\/mes/);
  });
});

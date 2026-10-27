import { test, expect } from '@playwright/test';
import { NAV_LINKS, PLANS } from '../src/data/site.js';

test.describe('landing — hero y menú de navegación', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('el hero y la barra de navegación son visibles', async ({ page }) => {
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();

    const hero = page.locator('#inicio');
    await expect(hero).toBeVisible();
    await expect(hero.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(hero.getByRole('link', { name: /ver planes/i })).toBeVisible();
    await expect(hero.getByRole('link', { name: /cómo funciona/i })).toBeVisible();
  });

  test('el menú muestra todos los links de ancla y apunta a secciones existentes', async ({
    page,
  }) => {
    const nav = page.getByRole('navigation', { name: 'Secciones' });
    await expect(nav).toBeVisible();

    const links = nav.getByRole('link');
    await expect(links).toHaveCount(NAV_LINKS.length);

    for (const link of NAV_LINKS) {
      const navLink = nav.getByRole('link', { name: link.label, exact: true });
      await expect(navLink).toBeVisible();
      await expect(navLink).toHaveAttribute('href', link.href);

      const target = page.locator(link.href);
      await expect(target, `la sección ${link.href} debe existir`).toHaveCount(1);
    }
  });

  test('los links del menú navegan a su sección', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Secciones' });

    for (const link of NAV_LINKS) {
      await nav.getByRole('link', { name: link.label, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${link.href}$`));
      await expect(page.locator(link.href)).toBeInViewport();
    }
  });

  test('el menú de planes lista todos los planes disponibles', async ({ page }) => {
    const plans = page.locator('#planes');
    await expect(plans.getByRole('heading', { level: 2 })).toBeVisible();

    const cards = plans.getByRole('article');
    await expect(cards).toHaveCount(PLANS.length);

    for (const plan of PLANS) {
      await expect(plans.getByRole('heading', { name: plan.name, exact: true })).toBeVisible();
      await expect(plans.getByRole('link', { name: new RegExp(`cotizar ${plan.name}`, 'i') }))
        .toBeVisible();
    }
  });
});

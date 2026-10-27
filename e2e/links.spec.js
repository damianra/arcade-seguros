import { test, expect } from '@playwright/test';

test.describe('landing — integridad de links e íconos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('main')).toBeVisible();
  });

  test('ningún <a> tiene href vacío, "#" o javascript:', async ({ page }) => {
    const hrefs = await page.locator('a').evaluateAll((anchors) =>
      anchors.map((anchor) => (anchor.getAttribute('href') ?? '').trim()),
    );

    expect(hrefs.length, 'la página debe tener links').toBeGreaterThan(0);

    for (const href of hrefs) {
      expect(href, 'todo <a> debe declarar un href con destino').not.toBe('');
      expect(href, 'un href "#" no es un destino real').not.toBe('#');
      expect(href.startsWith('javascript:'), `href inseguro: ${href}`).toBeFalsy();
    }
  });

  test('todos los links internos apuntan a secciones existentes', async ({ page }) => {
    const unresolved = await page.locator('a').evaluateAll((anchors) =>
      anchors
        .map((anchor) => (anchor.getAttribute('href') ?? '').trim())
        .filter((href) => href.startsWith('#') && href.length > 1)
        .filter((href) => document.getElementById(decodeURIComponent(href.slice(1))) === null),
    );

    expect(unresolved, 'no debe haber anclas sin sección destino').toEqual([]);
  });

  test('todo link e ícono clickeable tiene destino y nombre accesible', async ({ page }) => {
    const problems = await page.locator('body').evaluate(() => {
      const issues = [];

      document.querySelectorAll('a').forEach((anchor, index) => {
        const href = (anchor.getAttribute('href') ?? '').trim();
        if (!href || href === '#') {
          issues.push(`<a> #${index} sin destino`);
        }

        const name = (
          anchor.getAttribute('aria-label') ||
          anchor.getAttribute('title') ||
          anchor.textContent ||
          ''
        ).trim();
        const hasImageAlt = [...anchor.querySelectorAll('img')].some((img) =>
          (img.getAttribute('alt') ?? '').trim(),
        );
        if (!name && !hasImageAlt) {
          issues.push(`<a> #${index} sin nombre accesible (ícono sin texto)`);
        }
      });

      document.querySelectorAll('button').forEach((button, index) => {
        const name = (
          button.getAttribute('aria-label') ||
          button.getAttribute('title') ||
          button.textContent ||
          ''
        ).trim();
        if (!name) issues.push(`<button> #${index} sin nombre accesible`);
      });

      document.querySelectorAll('svg').forEach((svg, index) => {
        const link = svg.closest('a');
        const button = svg.closest('button');
        const decorative = svg.getAttribute('aria-hidden') === 'true';
        const labelled =
          (svg.getAttribute('aria-label') ?? '').trim() ||
          (svg.getAttribute('title') ?? '').trim();

        if (link) {
          const href = (link.getAttribute('href') ?? '').trim();
          if (!href || href === '#') issues.push(`<svg> #${index} dentro de un link sin destino`);
        } else if (button) {
          const name = (
            button.getAttribute('aria-label') ||
            button.getAttribute('title') ||
            button.textContent ||
            ''
          ).trim();
          if (!name) issues.push(`<svg> #${index} dentro de un botón sin nombre accesible`);
        } else if (!decorative && !labelled) {
          issues.push(`<svg> #${index} no es decorativo (falta aria-hidden) ni tiene etiqueta`);
        }
      });

      return issues;
    });

    expect(problems, 'links e íconos deben tener destino o ser decorativos').toEqual([]);
  });

  test('no hay elementos con role link sin href', async ({ page }) => {
    const badRoleLinks = await page
      .locator('[role="link"]:not(a)')
      .evaluateAll((elements) =>
        elements.filter((element) => !(element.getAttribute('href') ?? '').trim()).length,
      );

    expect(badRoleLinks).toBe(0);
  });
});

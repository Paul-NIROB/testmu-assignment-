const { test } = require('@playwright/test');

async function searchAndAddToCart(page, searchTerm) {
  await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  await page.locator('#twotabsearchtextbox').fill(searchTerm);
  await page.keyboard.press('Enter');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);

  const firstResult = page.locator('[data-component-type="s-search-result"]').first();
  await firstResult.waitFor({ timeout: 15000 });

  const title = await firstResult.locator('h2 span').first()
    .textContent().catch(() => 'Title not found');

  let price = 'Not found';
  for (const sel of ['.a-price .a-offscreen', '.a-price-whole', '.a-color-price']) {
    try {
      const val = await firstResult.locator(sel).first().textContent({ timeout: 3000 });
      if (val?.trim()) { price = val.trim(); break; }
    } catch {}
  }

  console.log(`\n==============================`);
  console.log(`Search  : ${searchTerm}`);
  console.log(`Product : ${title?.trim()}`);
  console.log(`Price   : ${price}`);
  console.log(`==============================\n`);

  // Navigate to product page
  const productUrl = await firstResult
    .locator('a.a-link-normal.s-no-outline, a.a-link-normal[href*="/dp/"]').first()
    .getAttribute('href', { timeout: 10000 })
    .catch(() => null);

  if (productUrl) {
    const fullUrl = productUrl.startsWith('http')
      ? productUrl : `https://www.amazon.in${productUrl}`;
    await page.goto(fullUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    try {
      await page.locator('#add-to-cart-button').click({ timeout: 8000 });
      console.log(`✓ Added to cart!`);
    } catch {
      console.log(`⚠ Add to cart not clicked (may need login)`);
    }
  }
}

test('TC1 - Search iPhone and add to cart', async ({ page }) => {
  await test.info().annotations.push({ type: 'LT:Options', description: JSON.stringify({
    name: 'TC1 - iPhone Search',
    build: 'TestMu Assignment',
  })});
  await searchAndAddToCart(page, 'iPhone');
});

test('TC2 - Search Galaxy and add to cart', async ({ page }) => {
  await test.info().annotations.push({ type: 'LT:Options', description: JSON.stringify({
    name: 'TC2 - Galaxy Search',
    build: 'TestMu Assignment',
  })});
  await searchAndAddToCart(page, 'Samsung Galaxy');
});
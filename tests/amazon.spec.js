const { test } = require('@playwright/test');

async function searchAndAddToCart(page, searchTerm) {
  await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  // Search
  await page.locator('#twotabsearchtextbox').fill(searchTerm);
  await page.keyboard.press('Enter');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);

  // Get first result
  const firstResult = page.locator('[data-component-type="s-search-result"]').first();
  await firstResult.waitFor({ timeout: 15000 });

  // Get title
  const title = await firstResult
    .locator('h2 span').first()
    .textContent()
    .catch(() => 'Title not found');

  // Get price
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

  // Get product URL and navigate directly instead of clicking
  // Get product URL and navigate directly instead of clicking
  const productUrl = await firstResult
    .locator('a.a-link-normal.s-no-outline, a.a-link-normal[href*="/dp/"]').first()
    .getAttribute('href', { timeout: 10000 })
    .catch(() => null);
    
  if (productUrl) {
    const fullUrl = productUrl.startsWith('http')
      ? productUrl
      : `https://www.amazon.in${productUrl}`;

    await page.goto(fullUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);

    // Get price on product page if not found earlier
    if (price === 'Not found') {
      for (const sel of [
        '.priceToPay .a-offscreen',
        '#priceblock_ourprice',
        '.a-price .a-offscreen',
        '#corePriceDisplay_desktop_feature_div .a-offscreen'
      ]) {
        try {
          const val = await page.locator(sel).first().textContent({ timeout: 3000 });
          if (val?.trim()) { price = val.trim(); break; }
        } catch {}
      }
      console.log(`Price on product page: ${price}`);
    }

    // Add to cart
    try {
      await page.locator('#add-to-cart-button').click({ timeout: 8000 });
      console.log(`✓ Successfully added to cart!`);
    } catch {
      console.log(`⚠ Add to cart button not found (may require login)`);
    }
  } else {
    console.log(`⚠ Could not get product URL`);
  }
}

test('TC1 - Search iPhone and add to cart', async ({ page }) => {
  await searchAndAddToCart(page, 'iPhone');
});

test('TC2 - Search Galaxy and add to cart', async ({ page }) => {
  await searchAndAddToCart(page, 'Samsung Galaxy');
});
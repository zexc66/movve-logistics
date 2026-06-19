import { test, expect } from '@playwright/test'

const pages = [
  { path: '/', title: 'MOVVE', heading: 'Precision at Scale' },
  { path: '/about', title: 'About', heading: /About/i },
  { path: '/services', title: 'Services', heading: /Services|Logistics/i },
  { path: '/tracking', title: 'Track', heading: /Track|Shipment/i },
  { path: '/careers', title: 'Careers', heading: /Careers|Join|Team/i },
  { path: '/blog', title: 'Blog', heading: /Blog|Insights|News/i },
  { path: '/contact', title: 'Contact', heading: /Contact|Get in touch/i },
]

test.describe('Page smoke tests', () => {
  for (const page of pages) {
    test(`${page.path} loads with correct title`, async ({ browser }) => {
      const p = await browser.newPage()
      await p.goto(page.path)
      await expect(p).toHaveTitle(new RegExp(page.title, 'i'))
      await p.close()
    })

    test(`${page.path} has visible h1`, async ({ browser }) => {
      const p = await browser.newPage()
      await p.goto(page.path)
      await expect(p.locator('h1').first()).toBeVisible()
      await p.close()
    })

    test(`${page.path} has no console errors`, async ({ browser }) => {
      const p = await browser.newPage()
      const errors: string[] = []
      p.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text())
      })
      await p.goto(page.path)
      await p.waitForLoadState('networkidle')
      // Allow GSAP/ScrollTrigger benign warnings but catch real errors
      const realErrors = errors.filter(e =>
        !e.includes('ScrollTrigger') &&
        !e.includes('GSAP') &&
        !e.includes('favicon')
      )
      expect(realErrors).toHaveLength(0)
      await p.close()
    })
  }
})

test.describe('Contact page', () => {
  test('has contact form with inputs', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('form')).toBeVisible()
    await expect(page.locator('input, textarea').first()).toBeVisible()
  })

  test('has submit button', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('button[type="submit"], form button').first()).toBeVisible()
  })
})

test.describe('Tracking page', () => {
  test('has tracking input', async ({ page }) => {
    await page.goto('/tracking')
    await expect(page.locator('input').first()).toBeVisible()
  })
})

test.describe('404 page', () => {
  test('shows 404 for unknown route', async ({ page }) => {
    await page.goto('/this-page-does-not-exist')
    await expect(page.locator('text=404')).toBeVisible()
    await expect(page.locator('text=Not Found')).toBeVisible()
  })

  test('404 has noindex meta', async ({ page }) => {
    await page.goto('/nonexistent-route')
    const robots = page.locator('meta[name="robots"]')
    await expect(robots).toHaveAttribute('content', /noindex/i)
  })
})

test.describe('SPA navigation', () => {
  test('navigates between pages without full reload', async ({ page }) => {
    await page.goto('/')
    await page.click('a:has-text("About")')
    await expect(page).toHaveURL(/.*about/)

    await page.click('a:has-text("Services")')
    await expect(page).toHaveURL(/.*services/)

    await page.click('a:has-text("Contact")')
    await expect(page).toHaveURL(/.*contact/)
  })

  test('footer links work', async ({ page }) => {
    await page.goto('/')
    const footer = page.getByRole('contentinfo')
    await footer.getByRole('link', { name: 'About' }).click()
    await expect(page).toHaveURL(/.*about/)
  })
})

test.describe('Accessibility smoke', () => {
  test('all pages have main landmark', async ({ page }) => {
    for (const pg of pages) {
      await page.goto(pg.path)
      await expect(page.locator('main')).toBeVisible()
    }
  })

  test('all pages have footer landmark', async ({ page }) => {
    for (const pg of pages) {
      await page.goto(pg.path)
      await expect(page.getByRole('contentinfo')).toBeVisible()
    }
  })

  test('skip link present on all pages', async ({ page }) => {
    for (const pg of pages) {
      await page.goto(pg.path)
      await expect(page.locator('.skip-link')).toBeVisible()
    }
  })

  test('structured data present on all pages', async ({ page }) => {
    for (const pg of pages) {
      await page.goto(pg.path)
      await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(2)
    }
  })
})

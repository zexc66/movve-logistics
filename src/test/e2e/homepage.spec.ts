import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('has correct title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/MOVVE/)
  })

  test('loads hero section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Global logistics')
  })

  test('navigation links work', async ({ page }) => {
    await page.goto('/')
    await page.click('text=About')
    await expect(page).toHaveURL(/.*about/)
  })

  test('mobile menu is accessible', async ({ page }) => {
    await page.goto('/')
    await page.setViewportSize({ width: 375, height: 667 })
    await page.click('button[aria-label="Toggle menu"]')
    await expect(page.locator('.mobile-menu')).toBeVisible()
  })

  test('tracking form is present', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('input[placeholder*="tracking"]')).toBeVisible()
    await expect(page.locator('button:has-text("Track")')).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('all navigation links are present', async ({ page }) => {
    await page.goto('/')
    const navLinks = ['Home', 'About', 'Services', 'Track', 'Careers', 'Blog', 'Contact']
    for (const link of navLinks) {
      await expect(page.locator(`text=${link}`)).toBeVisible()
    }
  })
})

test.describe('Accessibility', () => {
  test('skip link is focusable', async ({ page }) => {
    await page.goto('/')
    await page.keyboard.press('Tab')
    await expect(page.locator('.skip-link')).toBeFocused()
  })

  test('images have alt text', async ({ page }) => {
    await page.goto('/')
    const images = page.locator('img')
    const count = await images.count()
    for (let i = 0; i < count; i++) {
      await expect(images.nth(i)).toHaveAttribute('alt')
    }
  })
})
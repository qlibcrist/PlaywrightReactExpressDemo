import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';

test.describe('Verify the Home Page Functionality', () => {
  test('Verify that the user can reach the home page',
  async ({ page }) => {
    const homePage = new HomePage(page)

    await homePage.navigate()
    await homePage.isDisplayed()
  })
})

import { expect, Locator } from "@playwright/test";

export abstract class BaseComponent {

  locator: Locator

  constructor(locator: Locator) {
    this.locator = locator
  }

  async isDisplayed() {
    await expect(this.locator).toBeVisible()
  }
}

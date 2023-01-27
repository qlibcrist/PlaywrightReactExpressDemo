import { Page } from "@playwright/test";

export abstract class BasePage {

  url: string
  page: Page

  constructor(page: Page, url: string) {
    this.page = page
    this.url = url
  }

  abstract navigate()

  abstract isDisplayed()
}

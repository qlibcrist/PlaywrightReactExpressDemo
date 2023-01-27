import { Locator, Page } from "@playwright/test";
import { Text } from "../components/text";
import { BasePage } from "./basepage";

export class HomePage extends BasePage {

  private titleSelector = "#TitleWrapper > h1:nth-child(2)"

  private titleLocator: Locator

  title: Text

  constructor(page: Page) {
    const url = "http://localhost:3000"
    super(page, url)

    this.titleLocator = page.locator(this.titleSelector)
    this.title = new Text(this.titleLocator)
  }

  async navigate() {
    await this.page.goto(this.url)
  }

  async isDisplayed() {
    await this.title.isDisplayed()
  }
}

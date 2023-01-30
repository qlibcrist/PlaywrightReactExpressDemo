import { Locator, Page } from "@playwright/test";
import { Text } from "../components/text";
import { Form } from "../composites/form";
import { BasePage } from "./basepage";

export class HomePage extends BasePage {

  private titleLocator = "#TitleWrapper > h1:nth-child(2)"
  private formLocator = "#InputWrapper > form:nth-child(1)"

  title: Text
  form: Form

  constructor(page: Page) {
    const url = "http://localhost:3000"
    super(page, url)

    this.title = new Text(page.locator(this.titleLocator))
    this.form = new Form(page.locator(this.formLocator))
  }

  async navigate() {
    await this.page.goto(this.url)
  }

  async isDisplayed() {
    await this.title.isDisplayed()
  }
}

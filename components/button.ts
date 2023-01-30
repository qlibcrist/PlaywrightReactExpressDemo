import { Locator } from "@playwright/test";
import { BaseComponent } from "./basecomponent";

export class Button extends BaseComponent {

  constructor(locator: Locator) {
    super(locator)
  }

  async click() {
    await this.locator.click()
  }

  async getText() {
    return await this.locator.innerText()
  }

}

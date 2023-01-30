import { Locator } from "@playwright/test";
import { BaseComponent } from "./basecomponent";

export class Input extends BaseComponent {

  constructor(locator: Locator) {
    super (locator)
  }

  async typeText(text: string) {
    await this.locator.type(text)
  }

  async getCurrentValue() {
    return await this.locator.inputValue()
  }

}

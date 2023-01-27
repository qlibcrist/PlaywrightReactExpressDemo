import { expect, Locator } from "@playwright/test";
import { BaseComponent } from "./basecomponent";

export class Text extends BaseComponent {

  constructor(locator: Locator) {
    super(locator)
  }

  async verifyText(text: string) {
    await(expect(this.locator)).toHaveText(text)
  }
}

import { Locator } from "@playwright/test";
import { BaseComponent } from "./basecomponent";
import { Text } from "./text";

export class Checkbox extends BaseComponent {

  label: Text

  constructor(locator: Locator) {
    super(locator)

    this.label = new Text(locator)
  }

  async click() {
    await this.locator.click()
  }

}

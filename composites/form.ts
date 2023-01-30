import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "../components/basecomponent";
import { Button } from "../components/button";
import { Input } from "../components/input";

export class Form extends BaseComponent {

  input: Input
  button: Button

  constructor(locator: Locator) {
    super(locator)

    this.input = new Input(this.locator.locator('//input'))
    this.button = new Button(this.locator.locator('//button'))
  }

}

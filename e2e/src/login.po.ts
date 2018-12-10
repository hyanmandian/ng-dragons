import { browser, by, element } from "protractor";

export class LoginPage {
  navigateTo() {
    return browser.get("/");
  }

  getUserField() {
    return element(by.css('[name="user"]'));
  }

  getPassField() {
    return element(by.css('[name="pass"]'));
  }

  getErrorMessage() {
    return element(by.css('.mat-dialog-content')).getText();
  }

  getSubmitButton() {
    return element(by.css("button"));
  }
}

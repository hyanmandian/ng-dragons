import { browser } from "protractor";

import { LoginPage } from './login.po';

describe('Login', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should display dialog error when wrong credentials', () => {
    page.navigateTo();

    page.getUserField().sendKeys('wrong');
    page.getPassField().sendKeys('wrong');
    page.getSubmitButton().click();

    expect(page.getErrorMessage()).toBe("User not found.");
  });

  it('should login with default credentials', () => {
    page.navigateTo();

    page.getUserField().sendKeys('demo');
    page.getPassField().sendKeys('demo');
    page.getSubmitButton().click();

    expect(browser.getCurrentUrl()).not.toContain('login');
  });
});

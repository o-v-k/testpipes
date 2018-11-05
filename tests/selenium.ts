import { expect, assert } from 'chai';
import { Builder, By, until, ThenableWebDriver, WebDriver } from 'selenium-webdriver';

describe("All Tests", function () {

    let driver: ThenableWebDriver;
  
    describe('Test Chrome', function () {
  
      beforeEach(async function () {
        driver = new Builder().withCapabilities({ 'browserName': 'chrome' }).build();
      });
  
      it('test #1', async function () {
        await driver.get('http://www.google.com');
        
      });

      afterEach(async function () {
        await driver.quit();
      });
    });
  
  
  });
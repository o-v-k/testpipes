import { expect, assert } from 'chai';
import { Builder, By, until, ThenableWebDriver, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

describe("All Tests", function () {

    let driver: ThenableWebDriver;
  
    describe('Test Chrome', function () {
  
        let chromeoptions = new Options();
                chromeoptions.headless();

      beforeEach(async function () {
        driver = new Builder().withCapabilities({ 'browserName': 'chrome' }).setChromeOptions(chromeoptions).build();
      });
  
      it('test #1', async function () {
        await driver.get('http://www.google.com');
        
      });

      afterEach(async function () {
        await driver.quit();
      });
    });
  
  
  });
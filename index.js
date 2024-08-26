import GptDriver from "gpt-driver-node";

import {Builder} from 'selenium-webdriver';
import {remote} from "webdriverio";

const localLambdaTestAndroidCapabilities = {
    "lt:options": {
        "w3c": true,
        "platformName": "android",
        "deviceName": "Pixel 8",
        "platformVersion": "14",
        "isRealMobile": true,
        app: "<lambda_test_app_id>",
    }
};

const localAndroidCapabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
};

const localIosCapabilities = {
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:deviceName': 'iPhone 15 Pro',
    "appium:platformVersion": "17.5",
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities: localAndroidCapabilities,
};


const browserstackAppiumServerUrl = 'https://hub-use.browserstack.com/wd/hub'

const lambdaTestUsername = "<lambdaTestUsername>";
const lambdaTestAccessKey = "<lambdaTestAccessKey>";
const lambdaTestAppiumServerUrl = `https://${lambdaTestUsername}:${lambdaTestAccessKey}@mobile-hub.lambdatest.com/wd/hub`
const localAppiumServerUrl = 'http://127.0.0.1:4723'

const gptDriverApiKey = "<api-key>"

const wdLambdaTestOpts = {
    hostname: 'mobile-hub.lambdatest.com',
    port: 443,  // Use port 443 for HTTPS
    logLevel: 'info',
    protocol: 'https',  // Use HTTPS
    path: '/wd/hub',
    capabilities: localLambdaTestAndroidCapabilities,
    user: lambdaTestUsername,
    key: lambdaTestAccessKey,
};

const main = async () => {
    // webdriverio pointing to local appium server. Run 'start' script defined in package.json
    const driver = await remote(wdOpts);

    // webdriverio pointing to lambdaTest appium server. Run 'start' script defined in package.json
    // const driver = await remote(wdLambdaTestOpts);

    // browserstack selenium webdriver init. Run 'start-browserstack' script defined in package.json
    // const driver =  await new Builder()
    //     .usingServer(browserstackAppiumServerUrl)
    //     .build()

    // gptDriver instance pointing to webdriver server
    const gptDriver = new GptDriver({
        apiKey: gptDriverApiKey,
        driver,
        // Option 1) point to lambdaTest appium server
        // severConfig: {url: lambdaTestAppiumServerUrl}
        // Option 2) point to browserStack appium server
        // severConfig: {url: browserstackAppiumServerUrl}
        // Option 3) point to local appiumServer
        severConfig: {
            url: localAppiumServerUrl,
        }
    });

    await gptDriver.startSession();
    await gptDriver.execute("tap on youtube");
    await gptDriver.stopSession("success")
}

await main();
import GptDriver from "gpt-driver-node";

import {Builder} from 'selenium-webdriver';


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

const browserstackWebDriverUrl = 'https://hub-use.browserstack.com/wd/hub'
const localWebDriverUrl = 'http://127.0.0.1:4723'
const gptDriverApiKey = "<api-key>"

const main = async () => {
    // local selenium webdriver init.  Run 'start' script defined in package.json
    const driver = await new Builder()
        .usingServer(localWebDriverUrl)
        .withCapabilities(localAndroidCapabilities)
        .forBrowser('')
        .build()

    // gptDriver instance pointing to local webdriver
    const gptDriver = new GptDriver({
        apiKey: gptDriverApiKey,
        driver,
        severConfig: {url: localWebDriverUrl}
    })

    // browserstack selenium webdriver init. Run 'start-browserstack' script defined in package.json
    // const driver =  await new Builder()
    //     .usingServer(browserstackWebDriverUrl)
    //     .build()

    // gptDriver instance pointing to BrowserStack webdriver
    // const gptDriver = new GptDriver({
    //     apiKey: gptDriverApiKey,
    //     driver,
    //     severConfig: {url: browserstackWebDriverUrl}
    // })

    await gptDriver.startSession();
    await gptDriver.execute("tap on Photos and succeed if 'Keep your memories safe' is displayed");
    await gptDriver.stopSession("success")
}

await main();
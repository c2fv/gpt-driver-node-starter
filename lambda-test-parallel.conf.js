export const config = {
    user: "<user>",
    key: "<access_key>",
    gptDriverApiKey: "<gptDriverApiKey>",
    updateJob: false,
    specs: ["./specs/local-test.js"],
    exclude: [],
    commonCapabilities: {
        build: "LT_Appium_NodeJS_WebDriverIO_App_Automation",
        name: "Sample Parallel Test - WebDriverIO",
        isRealMobile: true,
        devicelog: true,
        visual: true,
    },
    capabilities: [
        {
            platformName: "Android",
            deviceName: ".*",
            name: "Sample Parallel Test - WebDriverIO",
            app: process.env.LT_APP_ID || "<LT_APP_ID>",
        },
        {
            platformName: "iOS",
            deviceName: ".*",
            name: "Sample Parallel Test - WebDriverIO",
            app: process.env.LT_APP_ID || "<LT_APP_ID>",
        },
    ],
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "https://mobile-hub.lambdatest.com",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: process.env.LT_GRID_URL || "mobile-hub.lambdatest.com",
    port: 80,
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 60000 * 10,
    },
};

config.capabilities.forEach((caps) => {
    for (const i in config.commonCapabilities) {
        caps[i] = caps[i] || config.commonCapabilities[i];
    }
});
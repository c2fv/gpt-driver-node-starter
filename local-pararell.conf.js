export const config = {
    gptDriverApiKey: "TEST_API_KEY",
    updateJob: false,
    specs: ["./specs/local-test.js"],
    exclude: [],
    capabilities: [
        {
            platformName: "Android",
            "appium:automationName": "UiAutomator2",
        },
        {
            platformName: "iOS",
            "appium:deviceName": "iPhone 15 Pro",
            "appium:platformVersion": "17.5",
            "appium:automationName": "xcuitest",
        },
    ],
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "http://127.0.0.1:4723",
    connectionRetryCount: 0,
    hostname: process.env.LT_GRID_URL || "127.0.0.1",
    port: 4723,
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
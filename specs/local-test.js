import GptDriver from "gpt-driver-node";

describe("Proverbial APK", () => {
    let gptDriver;

    beforeEach(async function () {
        gptDriver = new GptDriver({
            apiKey: browser.options.gptDriverApiKey,
            driver: browser,
            serverConfig: {
                url: browser.options.baseUrl,
            }
        });
    })

    it("type on home", async () => {
        await gptDriver.execute("tap on home.");
    });
    //
    // it("tap on photos icon, which is a little bit upper the label", async () => {
    //     await gptDriver.execute("tap on photos");
    // });
    //
    // it("tap on search", async () => {
    //     await gptDriver.execute("tap on search");
    // });
});
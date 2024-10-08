import GptDriver from "gpt-driver-node";

describe("Local mocha test", () => {

    console.log("beforeEach");
    let gptDriver;

    beforeEach(async function () {
        gptDriver = new GptDriver({
            apiKey: "<api_key>",
            serverConfig: {
                device: {
                    platform: "Android",
                }
            },
            useGptDriverCloud: true,
            buildId: "<build_id>",
        });
    })

    afterEach(async function () {
        await gptDriver.setSessionStatus("success");
    });

    it("tap on home", async () => {
        await gptDriver.execute("tap on home.");
    });
});
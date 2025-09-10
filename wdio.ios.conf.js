export const config = {
    // runner: 'local',
    // port: 4723,

    user: 'oauth-testadordequalidade2-31887',
    key: '768185a7-1ce1-4b51-8f11-e446bbad45f4',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
          
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
       {
            "platformName": "iOS",
            "appium:deviceName": "iPhone Simulator",
            "appium:platformVersion": "17.0",
            "appium:automationName": "XCUITest",
            "appium:app": "storage:filename=LojaEBAC-sim (1).zip"
        }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 240000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    }
}

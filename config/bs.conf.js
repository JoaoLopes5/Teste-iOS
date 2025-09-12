import { generalConf } from './general.conf.js'
export let bsConf = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_KEY,
    hostname: 'hub.browserstack.com',
    capabilities: process.env.PLATFORM === "android" ? [
        {
            "platformName": "Android",
            "appium:deviceName": "Samsung Galaxy S22 Ultra",
            "appium:platformVersion": "12.0",
            "appium:automationName": "UIAutomator2",
            "appium:app": "bs://481b8b7163a669e6c765e69edc3e29b71120e0fe"
        }
    ] : [
        {
            "platformName": "iOS",
            "appium:deviceName": "iPhone 14 Pro Max",
            "appium:platformVersion": "16",
            "appium:automationName": "XCUITest",
            "appium:app": "bs://5d4e4242ab5cc990461457be8f253d8e7caae5a8"
        }
    ],
    commonCapabilities: {
        'bstack:options': {
            projectName: "BrowserStack EBAC",
            buildName: 'browserstack build',
            sessionName: `Test ${process.env.PLATFORM}`
            // debug: true,
            // networkLogs: true
        }
    },
    ...generalConf
}
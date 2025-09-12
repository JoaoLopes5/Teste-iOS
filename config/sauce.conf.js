import { generalConf } from './general.conf.js'
export let sauceConf = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_KEY,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    path: '/wd/hub',
    capabilities: process.env.PLATFORM === "android" ? [
        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop (1).aab', // The filename of the mobile app
            'appium:deviceName': 'Samsung.*',
            'appium:platformVersion': '10',
            'appium:automationName': 'UiAutomator2',
            "appium:disableIdLocatorAutocompletion": true,
            'sauce:options': {
                build: 'appium-build-teste-ebacshop-android',
                name: 'Ebac Shop Teste',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: '2.0.0'
            },
        }
    ] : [
        {
            platformName: 'iOS',
            'appium:app': 'storage:filename=LojaEBAC-sim (1).zip', // The filename of the mobile app
            'appium:deviceName': 'iPhone Simulator',
             'appium:platformVersion': '17',
            'appium:automationName': 'XCUITest',
            'sauce:options': {
                build: 'appium-build-teste-ebacshop-ios',
                name: 'Ebac Shop Teste',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: '2.1.3'
            },
        }
    ],
    ...generalConf
}
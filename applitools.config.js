module.exports = {
    apiKey: 'f1nWYxwugP1HPFzN2OpltpgO2OiwMaWE716tffZE0gQ110',
    serverUrl: 'https://eyes.applitools.com',
    showLogs: true,
    concurrency: 18,
    browser: [
        // Add browsers with different viewports]
        {width: 1280, height: 720, name: 'chrome'},
        {width: 800, height: 600, name: 'chrome'},
        {width: 1280, height: 720, name: 'firefox'},
        {width: 800, height: 600, name: 'firefox'},
        {width: 1280, height: 720, name: 'ie11'},
        {width: 800, height: 600, name: 'ie11'},
        {width: 1280, height: 720, name: 'edgechromium'},
        {width: 800, height: 600, name: 'edgechromium'},
        {width: 1280, height: 720, name: 'safari'},
        {width: 800, height: 600, name: 'safari'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone 11 Pro', screenOrientation: 'portrait'},
        {deviceName: 'iPhone 11 Pro', screenOrientation: 'landscape'},
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'iPhone X', screenOrientation: 'landscape'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'},
        {deviceName: 'Pixel 2', screenOrientation: 'landscape'},
        {deviceName: 'Galaxy S9', screenOrientation: 'portrait'},
        {deviceName: 'Galaxy S9', screenOrientation: 'landscape'}
     ],
    // set batch name to the configuration
    batchName: 'Cypress Cucumber Applitools Emerald Works'
}

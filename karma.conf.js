module.exports = function (config) {
    config.set({
        frameworks: [
            'mocha',
            'chai',
            'detectBrowsers'
        ],

        files: [
            'test/sqrt.js'
        ],

        client: {
            mocha: {
                reporter: 'html',
                ui: 'bdd'
            }
        },

        singleRun: true,

        detectBrowsers: {
            enabled: true,
            usePhantomJS: false
        },

        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-safari-launcher',
            'karma-detect-browsers'
        ]
    });
}

const {join} = require('path');
const REPORT_DIR = './report';
const {removeSync} = require('fs-extra');
const chai = require('chai');
const {TimelineService} = require('wdio-timeline-reporter/timeline-service');

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================

    runner: 'local',
    path: '/',
    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        functional: [
            './test/specs/functional/*.js'
        ],
        performance: [
            './test/specs/performance/*.js'
        ],
        visual: [
            './test/specs/visual-regression/*.js'
        ]
    },
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    logLevel: 'info',
    baseUrl: 'http://automationpractice.com/',
    waitforTimeout: 5000,
    connectionRetryTimeout: 9000,
    connectionRetryCount: 3,
    services: ['chromedriver',
        ['devtools'],
        [TimelineService],
        ['image-comparison',
            // The options
            {
                baselineFolder: join(process.cwd(), './baseline/web/'),
                screenshotPath: join(process.cwd(), './result/'),
                clearRuntimeFolder: true,
                returnAllCompareData: true,
                formatImageName: '{tag}-{logName}-{width}x{height}',
                disableCSSAnimation: true,
                savePerInstance: true,
                autoSaveBaseline: true,
                blockOutStatusBar: true,
                blockOutToolBar: true,
            }
        ]
    ],
    framework: 'mocha',
    reporters: ['spec', ['timeline', {
        outputDir: REPORT_DIR,
        embedImages: true,
        screenshotStrategy: 'before:click'
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register']
    },
    //
    // =====
    // Hooks
    // =====
    onPrepare: function () {
        removeSync(REPORT_DIR);
    },
    beforeSession: function () {},
    before: function () {
        global.assert = chai.assert;
        global.expect = chai.expect;
        chai.Should();
        browser.maximizeWindow();
        require('./src/common/customCommands');
    }
}
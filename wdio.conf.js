const {
    join
} = require('path');
const {
    TimelineService
} = require('wdio-timeline-reporter/timeline-service');
const TIMELINE_REPORT_DIR = './report';
const {
    removeSync
} = require('fs-extra');

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
    bail: 0,
    baseUrl: 'http://automationpractice.com/',
    waitforTimeout: 5000,
    connectionRetryTimeout: 9000,
    connectionRetryCount: 3,
    services: ['chromedriver', [TimelineService],
        ['devtools'],
        ['image-comparison',
            // The options
            {
                baselineFolder: join(process.cwd(), './baseline/web/'),
                screenshotPath: join(process.cwd(), './result/'),
                clearRuntimeFolder: true,
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
        outputDir: TIMELINE_REPORT_DIR,
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
    onPrepare: function (config, capabilities) {
        removeSync(TIMELINE_REPORT_DIR);
    },
    beforeSession: function (config, capabilities, specs) {},
    before: function () {
        const chai = require('chai');
        global.assert = chai.assert;
        global.expect = chai.expect;
        chai.Should();
    }
}
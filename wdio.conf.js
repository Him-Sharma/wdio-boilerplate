const { join } = require('path');
const TEST_OUTPUT_DIR = './test-output';
const REPORT_DIR = `${TEST_OUTPUT_DIR}/report`;
const { removeSync } = require('fs-extra');

const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================

  runner: 'local',
  path: '/',
  outputDir: TEST_OUTPUT_DIR,
  //
  // ==================
  // Specify Test Files
  // ==================
  specs: ['./test/specs/**/*.js'],
  suites: {
    functional: ['./test/specs/functional/*.js'],
    performance: ['./test/specs/performance/*.js'],
    visual: ['./test/specs/visual-regression/*.js']
  },
  //
  // ============
  // Capabilities
  // ============
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['window-size=1366,1024']
      }
    }
  ],
  logLevel: 'info',
  baseUrl: 'http://automationpractice.com/',
  waitforTimeout: 5000,
  connectionRetryTimeout: 9000,
  connectionRetryCount: 3,
  services: [
    'chromedriver',
    ['devtools'],
    [TimelineService],
    [
      'image-comparison',
      {
        baselineFolder: join(process.cwd(), './baseline/web/'),
        screenshotPath: join(process.cwd(), `${TEST_OUTPUT_DIR}/visual/`),
        clearRuntimeFolder: true,
        returnAllCompareData: true,
        formatImageName: '{tag}-{logName}-{width}x{height}',
        disableCSSAnimation: true,
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true
      }
    ]
  ],
  framework: 'mocha',
  reporters: [
    'spec',
    [
      'timeline',
      {
        outputDir: REPORT_DIR,
        embedImages: true,
        screenshotStrategy: 'before:click'
      }
    ]
  ],

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
    removeSync(TEST_OUTPUT_DIR);
  },
  beforeSession: function () {},
  before: function () {
    const chai = require('chai');
    global.assert = chai.assert;
    global.expect = chai.expect;
    chai.Should();
    require('./src/framework/customCommands');
  }
};

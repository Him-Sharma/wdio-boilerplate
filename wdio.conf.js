const { join } = require('path');
const TEST_OUTPUT_DIR = `${process.cwd()}/test-output`;
const REPORT_DIR = `${TEST_OUTPUT_DIR}/report`;

const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================

  runner: 'local',
  path: '/wd/hub',
  port: 4444,
  outputDir: TEST_OUTPUT_DIR,
  //
  // ==================
  // Specify Test Files
  // ==================
  specs: ['./src/specs/**/*.js'],
  suites: {
    functional: ['./src/specs/functional/*.js'],
    performance: ['./src/specs/performance/*.js'],
    visual: ['./src/specs/visual-regression/*.js']
  },
  //
  // ============
  // Capabilities
  // ============
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['window-size=1366,1024']
    }
  }],
  logLevel: 'debug',
  baseUrl: 'http://automationpractice.com/',
  waitforTimeout: 5000,
  connectionRetryTimeout: 9000,
  connectionRetryCount: 3,
  services: ['devtools',
    [TimelineService],
    [
      'image-comparison',
      {
        baselineFolder: join(process.cwd(), './baseline/web/'),
        screenshotPath: `${TEST_OUTPUT_DIR}/visual/`,
        clearRuntimeFolder: true,
        returnAllCompareData: true,
        formatImageName: '{tag}-{logName}-{width}x{height}',
        disableCSSAnimation: true,
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true
      }
    ], ['chromedriver', {
      logFileName: 'wdio-chromedriver.log', // default
      outputDir: TEST_OUTPUT_DIR, // overwrites the config.outputDir
      args: ['--silent']
    }]
  ],
  chromeDriverLogs: TEST_OUTPUT_DIR,
  framework: 'mocha',
  reporters: [
    'spec', [
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
  beforeSession: function () { },
  before: function () {
    require('./src/framework/customCommands');
  }
};

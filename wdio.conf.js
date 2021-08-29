const { join } = require('path');
const TEST_OUTPUT_DIR = `${process.cwd()}/test-output`;
const reportPortalService = require('wdio-reportportal-service');
const reportportal = require('wdio-reportportal-reporter');
const conf = {
  reportPortalClientConfig: { // report portal settings
    token: process.env.REPORT_PORTAL_TOKEN,
    endpoint: 'http://localhost:8080/api/v1',
    launch: 'spike',
    project: 'wdio-playground',
    mode: 'DEFAULT',
    debug: false,
    description: 'spike for wdio reportportal in',
    attributes: [{ key: 'tag', value: 'spike' }]
  },
  reportSeleniumCommands: false, // add selenium commands to log
  seleniumCommandsLogLevel: 'debug', // log level for selenium commands
  autoAttachScreenshots: false, // automatically add screenshots
  screenshotsLogLevel: 'info', // log level for screenshots
  parseTagsFromTestTitle: false // parse strings like `@foo` from titles and add to Report Portal
};

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
    [reportPortalService, {}],
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
  reporters: ['spec', [reportportal, conf]],

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

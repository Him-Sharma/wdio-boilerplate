const {
  join,
} = require('path');

const REPORT_DIR = './report';
const {
  removeSync,
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
    './test/specs/**/*.js',
  ],
  suites: {
    functional: [
      './test/specs/functional/*.js',
    ],
    performance: [
      './test/specs/performance/*.js',
    ],
    visual: [
      './test/specs/visual-regression/*.js',
    ],
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
  logLevel: 'silent',
  baseUrl: 'http://automationpractice.com/',
  waitforTimeout: 5000,
  connectionRetryTimeout: 9000,
  connectionRetryCount: 3,
  services: ['chromedriver',
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
      },
    ],
  ],
  framework: 'mocha',
  reporters: ['spec', ['allure', {
    outputDir: REPORT_DIR,
  }]],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    require: ['@babel/register'],
  },
  //
  // =====
  // Hooks
  // =====
  onPrepare() {
    removeSync(REPORT_DIR);
  },
  beforeSession() {},
  before() {
    const chai = require('chai');
    global.assert = chai.assert;
    global.expect = chai.expect;
    chai.Should();
    browser.maximizeWindow();
  },
};

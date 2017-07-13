require('./lib/nightwatch/bin/runner.js');
var Nightwatch2HtmlReporter = require('nightwatch-html-reporter');

module.exports = {
		framework: 'jasmine2',
		// The address of a running selenium server.
		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['googlePageObject.js'],
		//specs: ['AddUser.js','UpdateUser.js','DeleteUser.js'],


		// Capabilities to be passed to the webdriver instance.
		capabilities: {
			'browserName': 'chrome',
			shardTestFiles: true,
			'chromeOptions': {
				'args': ['disable-extensions'],
				'extensions': [],
			}
		},





		// Options to be passed to Jasmine-node.
		jasmineNodeOpts: {
			isVerbose: false,
			showColors: true,
			includeStackTrace: false,
			defaultTimeoutInterval: 70000
		}

};
//configure junit xml and Html report
/*unction() {
	jasmine.getEnv().addReporter(new Nightwatch2HtmlReporter({
		savePath: './Reports/HTMLReports/' ,
		screenshotsFolder:'images',
		filePrefix: 'htmloutput'+ Date.now()
	}));
	var jasmineReporters = require('jasmine-reporters');
	jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
		consolidateAll: true,
		filePrefix: 'xmloutput'+ Date.now(),
		savePath: 'Reports/XMLReports'

	}));
}*/

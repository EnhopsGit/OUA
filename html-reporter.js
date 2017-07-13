var HtmlReporter = require('nightwatch-html-reporter');
/* Same options as when using the built in nightwatch reporter option */
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/Reports/XMLReports',
    /* The filename that the html report will be saved as. */
    reportFilename: 'generatedReport.html',
    relativeScreenshots: true,
    themeName: 'outlook',
});

module.exports = {
  write : function(results, options, done) {
    reporter.fn(results, done);
  }
};
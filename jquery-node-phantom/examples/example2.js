var async = require('async');
var $ = require('jquerygo');
$.config.addJQuery = false;
async.series([
  function(done) {
    $.visit("http://api.jquery.com", done);
  },
  function(done) {
    $('input[placeholder="Search"]').val('each', done);
  },
  function(done) {
    $('button.icon-search').click(done);
  },
  function(done) {
    $.waitForElement('div.entry-summary:eq(0) p', done);
  }
], function() {
  $('div.entry-summary:eq(0) p').text(function(summary) {
    console.log(summary);
    $.close();
  });
});
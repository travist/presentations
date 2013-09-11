var $ = require('jquerygo');
var async = require('async');
async.series([
  $.go('visit', 'http://api.jquery.com/'),
  function(done) {
    $('h1.entry-title a').each(function(index, item, done) {
      this.text(function(text) {
        console.log(text);
        done();
      });
    }, done);
  }
], function() {
  $.close();
});
var $ = require('jquerygo');
var async = require('async');
async.series([
  $.go('visit', 'https://drupal.org/user'),
  $('#edit-name').go('val', 'travist'),
  $('#edit-pass').go('val', '123testing'),
  $('#edit-submit').go('click'),
  $.go('waitForPage')
], function() {
  console.log('You are now logged in!');
  $.capture('loggedin.png');
  $.close();
});
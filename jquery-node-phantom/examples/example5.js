var $ = require('jquerygo');
var async = require('async');
var config = require('nconf');
var prompt = require('prompt');

config.argv().env().file({file:'examples/example5.json'});
prompt.start();

$.login = function(user, pass, done) {
  async.series([
    $.go('visit', 'https://drupal.org/user'),
    $('#edit-name').go('val', user),
    $('#edit-pass').go('val', pass),
    $('#edit-submit').go('click'),
    $.go('waitForPage')
  ], done);
};

async.series([
  function(done) {
    prompt.get({name: 'pass', hidden: true}, function(err, data) {
      config.set('pass', data.pass);
      done();
    });
  },
  $.go('login', config.get('user'), function() {
    return config.get('pass');
  })
], function() {
  console.log('Logged in.');
  $.capture('loggedin.png');
  $.close();
});
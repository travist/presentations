var $ = require('jquerygo');
$.config.addJQuery = false;
$.visit("http://api.jquery.com", function() {
  $('input[placeholder="Search"]').val('each', function() {
    $('button.icon-search').click(function() {
      $.waitForElement('div.entry-summary:eq(0) p', function() {
        $('div.entry-summary:eq(0) p').text(function(summary) {
          console.log(summary);
          $.close();
        });
      });
    });
  });
});

var app = require('express')();

app.get('/users.json', function(req, res) {
  res.json([
    {
      first: 'Travis',
      last: 'Tidwell'
    },
    {
      first: 'Joe',
      last: 'Smith'
    },
    {
      first: 'Sam',
      last: 'Roberts'
    }
  ]);
});

app.listen(4000);

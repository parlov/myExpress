var express = require ('express');

var app = express();

app.get('/', function (req, res) {
    res.send('hooray');
});
  
app.get('/hellaw', function (req, res) {
  res.send('hellaw');
});

app.post('/posting', function (req, res) {
  res.send('post geng \n');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

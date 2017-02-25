var express = require('express');
var formidable = require('express-formidable');
var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.use(formidable());

fs.readFile(__dirname + '/data/posts.json', function (error, file) {
  console.log(file.toString());

  var parsedFile = JSON.parse(file);
});


app.post('/create-post', function (req, res) {
  console.log('/create-post was hit');
  console.log(req.fields);

});

app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});

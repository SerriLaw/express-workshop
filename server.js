var express = require('express');
var formidable = require('express-formidable');
var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.use(formidable());


app.post('/create-post', function (req, res) {
  console.log('/create-post was hit');
  console.log(req.fields);
  
});

app.get('/posts', function (req, res) {
  var postData;

  fs.readFile(__dirname + '/data/posts.json', function (error, file) {

    postData = JSON.parse(file);
    res.send(postData);
  });


});

app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});

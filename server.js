var express = require('express');
var formidable = require('express-formidable');
var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.use(formidable());


app.post('/create-post', function (req, res) {
  var text = req.fields.blogpost;
  var timestamp = Date.now();
  var data;

  fs.readFile(__dirname + '/data/posts.json', function (error, file) {

    data = JSON.parse(file);
    data[timestamp] = text;
    data = JSON.stringify(data);


    fs.writeFile(__dirname + '/data/posts.json', data, function (error) {

    });

  });
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

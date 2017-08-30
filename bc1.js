var http = require('http'),
  url = require('url'),
  port = 8080,
  fs = require('fs');

function onCall(request, response) {
  var listings = url.parse(request.url).pathname;
  if(listings == '/listings') {

    fs.readFile('listings.json', 'utf8', function (err,data) {
    response.end(data);
   });
}

  else {
    response.writeHead(404);
    response.end('Bad gateway error');
  }

};
http.createServer(onCall).listen(8080); //on reqeut use function
console.log('Server listening on: http://127.0.0.1:' + port);

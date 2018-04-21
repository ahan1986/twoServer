var http = require('http');

var PORTgood = 7000;
var PORTbad = 7500;

function handleRequest(req, response) {
    response.end("this works!" + req.url);
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

server1.listen(PORTgood, function() {
    console.log(PORTgood);
})

server2.listen(PORTbad, function() {
    console.log(PORTbad);
})
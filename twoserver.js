var http = require('http');

var PORTgood = 7000;
var PORTbad = 7500;

function handleRequest1(req, response) {
    response.end("You look nice!");
}

function handleRequest2(req, response) {
    response.end("You look just aiite~!");
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORTgood, function() {
    console.log(PORTgood);
})

server2.listen(PORTbad, function() {
    console.log(PORTbad);
})
var http = require('http');
var settings = require('./settings');
console.log(settings);
var server = http.createServer();
server.on('request', function(req, res){
    switch (req.url) {
        case '/about':
            msg = "about title page";
            break;
        case '/profile':
            msg = "about me";
            break;
        default:
            msg = 'wrong page';
            break;
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(msg);
    res.end();
});
server.listen(settings.port);
console.log("server listening....")
var http = require('http');
var url = require('url');

/*
http.createServer( function (request, response) { 
	response.writeHead(200, {'Content-Type': 'text/plain'})
	response.write('Hello World');
	response.end();
}).listen(8080);
*/

function start(route, handle) {
	function onRequest (request, response) {
		var pathName = url.parse(request.url).pathname;

		if ( pathName === '/favicon.ico' ) {
			return false;
		}
	
		console.log('Request for ' + pathName + ' received');
		route(handle, pathName, response);
		
		/*
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(content);
		response.end();
		*/
	}

	http.createServer(onRequest).listen(8080);
	console.log('Server started');
}

exports.start = start;

var exec = require('child_process').exec;

function start(response) {
	console.log('Request handler `start` was called.');
	
	/*
	function snooze(time) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + time) {}
	}

	snooze(10000);
	return 'Hola start';
	*/
	
	/*
	var content = 'empty';

	exec('ls -lah', function (error, stdout, stderr) {
		content = stdout;
	});

	return content;
	*/

	/*
	exec('ls -lah', function (error, stdout, stderr) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(stdout);
		response.end();
	});
	*/

	var body = '<!DOCTYPE html><html><head>' +
			'<meta http-equiv="Content-Type" content="text/html" charset=UTF-8">' +
			'</head><body>' +
			'<form action="/upload" method="post">' +
			'<textarea name="text" rows="20" cols="60"></textarea><br>' +
			'<input type="submit" value="Submit text">' +
			'</form></body></html>';

	response.writeHead(200);
	response.write(body);
	response.end();
}

function upload() {
	console.log('Request handler `upload` was called.');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('Hola upload');
	response.end();
}

exports.start = start;
exports.upload = upload;

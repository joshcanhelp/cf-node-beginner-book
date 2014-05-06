var exec = require('child_process').exec;

function start() {
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

	exec('ls -lah', function (error, stdout, stderr) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write(stdout);
		response.end();
	}
}

function upload() {
	console.log('Request handler `upload` was called.');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hola upload');
	response.end();
}

exports.start = start;
exports.upload = upload;

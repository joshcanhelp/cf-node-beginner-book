// var exec = require('child_process').exec;
var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');

function start(response, request) {
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
			'<form action="/upload" method="post" enctype="multipart/form-data">' +
			'<input type="file" name="upload"><br>' +
			'<input type="submit" value="Upload file">' +
			'</form></body></html>';

	response.writeHead(200);
	response.write(body);
	response.end();
}

function upload(response, request) {
	console.log('Request handler `upload` was called.');

	var form = new formidable.IncomingForm();

	console.log('About to parse the form');

	form.parse(request, function(err, fields, files){
		console.log('Parsing the form');

		fs.rename(files.upload.path, '/tmp/test.jpg');
	});

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('received image:<br/>');
	response.write('<img src="/show">');
	response.end();
}

function show(response) {
	console.log('Request handler `show` was called.');
	response.writeHead(200, {'Content-Type': 'image/jpg'});
	fs.createReadStream('/tmp/test.jpg').pipe(response);
}

function html(response) {
	console.log('Request handler `html` was called.');
	response.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('html-serve-me.html', function(err, data){
		if (err) {
			throw err;
		}
		response.write(data);
		response.end();
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;
exports.html = html;

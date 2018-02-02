module.exports = function (grunt) {

	// Load JSHint plugin
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Project options
	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'server.js', 'index.js',
				'router.js', 'requestHandler.js']
		}
	});

	grunt.registerTask('default', ['jshint']);
};
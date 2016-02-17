/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [
        {
          expand: true,
          cwd: './assets',
          src: ['**/*.!(coffee|less)'],
          dest: '.tmp/public'
        },
        {
          expand: true,
          cwd: './bower_components/font-awesome/fonts/',
          src: ['**/*'],
          dest: '.tmp/public/linker/fonts'
        },
        { '.tmp/public/linker/js/jquery.js':            './bower_components/jquery/jquery.js' },
        { '.tmp/public/linker/js/socket.io.js':         './bower_components/socket.io-client/dist/socket.io.js' },
        { '.tmp/public/linker/js/angular.js':           './bower_components/angular/angular.js' },
        { '.tmp/public/linker/js/ui-bootstrap.js':      './bower_components/angular-bootstrap/ui-bootstrap.js' },
        { '.tmp/public/linker/js/ui-bootstrap-tpls.js': './bower_components/angular-bootstrap/ui-bootstrap-tpls.js' },
        { '.tmp/public/linker/js/angular-socket.io.js': './bower_components/angular-socket-io/socket.js' }
      ]
		},
    prod : {
    	files : [
        {
          expand: true,
          cwd: './bower_components/font-awesome/fonts/',
          src: ['**/*'],
          dest: '.tmp/public/fonts'
        }
      ]
    },
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};

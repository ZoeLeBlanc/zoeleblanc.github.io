module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.initConfig({
    browserify: {
      js: {
          src: ['../javascripts/main.js'],
          dest: 'dist/app.js'
      }
    },
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
        predef: [ "document", "console", "$", "firebase", "Materialize", "app", "angular", "Instafeed"],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      }
    },
     sass: {
      dist: {
        files: {
          '../css/styles.css': '../sass/styles.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sassy: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']        
      }
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd:"../",
            src: [
              "index.html",
              "javascripts/**/*.js",
              "css/**/*.css"
            ],
            dest: "../public/"
        }
        ]
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['sass', 'jshint', 'browserify', 'watch']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('deploy', ['sass', 'copy']);
};
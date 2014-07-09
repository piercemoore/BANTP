module.exports = (grunt) ->

    bower = "bower_components/"
    BANNER = '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n'

    @initConfig
        pkg: grunt.file.readJSON "bower.json"
        clean:
            pre: []
            post: []
        concat:
            options:
                separator: '; \n\n'
                stripBanners: false
            dev_libs:
                src: []
                dest: ""
            prod_libs:
                src: []
                dest: ""
            app:
                src: []
                dest: ""
        uglify:
            options:
                mangle: true
                compress: true
                preserveComments: false
            app:
                src: []
                dest: ""
        copy:
            components:
                expand: true
                src: [ "src/components/*" ]
                dest: "dist/"
                filter: "isFile"
                flatten: true
            app_images:
                expand: true
                src: [ "src/app_images/*" ]
                dest: "dist/app_images/"
                filter: "isFile"
                flatten: true
        "compile-handlebars":
            components:
                template: "src/templates/main/*.hb"
                templateData: 'package.json'
                output: "dist/*.html"
        rename:
            manifest:
                src: 'dist/manifest.html'
                dest: 'dist/manifest.json'
            license:
                src: 'dist/license.html'
                dest: 'dist/license.txt'
        watch:
            styles:
                src: 'src/less/*.less'
                tasks: ['less:dev']
            scripts:
                src: 'src/js/**/*.js'
                tasks: ['jshint:dev']
        jshint:
            all : ['src/js/**/*.js']
        less:
            dev:
                paths: [
                    'src/less'
                    'bower_components/bootstrap/less'
                ]
                files:
                    'dist/css/bantp.css' : 'src/less/bantp.less'


    @loadNpmTasks "grunt-banner"
    @loadNpmTasks "grunt-compile-handlebars"
    @loadNpmTasks "grunt-contrib-clean"
    @loadNpmTasks "grunt-contrib-coffee"
    @loadNpmTasks "grunt-contrib-concat"
    @loadNpmTasks "grunt-contrib-copy"
    @loadNpmTasks "grunt-contrib-handlebars"
    @loadNpmTasks "grunt-contrib-jshint"
    @loadNpmTasks "grunt-contrib-less"
    @loadNpmTasks "grunt-contrib-uglify"
    @loadNpmTasks "grunt-contrib-watch"
    @loadNpmTasks "grunt-rename"

    @registerTask "config", ()->
        console.log "Package!", grunt.config.data

    # @registerTask "build", []
    # @registerTask "package", []
    # @registerTask "docs", []
    # @registerTask "test", []
    @registerTask "default", [
        # "copy:components"
        "copy:app_images"
        "compile-handlebars:components"
        "rename:manifest"
        "rename:license"
        "less:dev"
        "jshint"
    ]
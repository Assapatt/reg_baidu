module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: "./index.html",
                dest: "./dist/index.html"
            }
        },
        cssmin: {
            options: {
                compatibility: 'ie8',
                noAdvanced: true
            },
            minify: {
                files: {
                    "dist/static/css/common.min.css": ['static/css/*.css', '!css/*.min.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: false, 
                preserveComments: 'false', 
                footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            files: {
                src: "./baidu_reg.js",
                dest: "./dist/baidu_reg.js"
            }
        }

    });
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.registerTask("default", ['htmlmin', 'cssmin','uglify']);
}
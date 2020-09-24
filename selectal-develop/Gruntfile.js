module.exports = function (grunt) {  
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'),  
        cssmin: {  
            sitecss: {  
                options: {  
                    banner: '/* My minified css file */'  
                },  
                files: {  
                    './dist/selectal.min.css': [  
                        './src/selectal.css',
                    ]  
                }  
            }  
        },  
        uglify: {  
            options: {  
                compress: true
            },  
            applib: {  
                src: [  
                './src/selectal.js',
                ],  
                dest: './dist/selectal.min.js'
            }  
        }  
    });
    grunt.registerTask('default', ['uglify', 'cssmin']);  
};
/* global module: true */
module.exports = function (grunt) {
    // 插件的具体配置信息
    grunt.initConfig({
        eslint: {
            options: {
                eslintrc: './.eslintrc.json'
            },
            target: ['*.js']
        }
    });
    // 加载插件
    grunt.loadNpmTasks('grunt-eslint');
    // 构建的任务清单
    grunt.registerTask('default', ['eslint']);
};

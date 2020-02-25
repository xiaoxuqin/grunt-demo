module.exports = function(grunt){
    // 插件的具体配置信息
    grunt.initConfig({
        htmlhint:{
            options:{
                htmlhintrc:'./.htmlhintrc'
            },
            src:['*.html']
        }
    });

    // 加载插件
    grunt.loadNpmTasks('grunt-htmlhint');

    // 构建的任务清单
    grunt.registerTask('default', ['htmlhint']);
}

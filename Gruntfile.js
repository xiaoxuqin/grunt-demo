module.exports = function(grunt){
    // 插件的具体配置信息
    grunt.initConfig({
        csslint:{
            options:{
                csslintrc:'./.csslintrc'
            },
            src:['*.css']
        }
    });

    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-csslint');

    // 构建的任务清单
    grunt.registerTask('default', ['csslint']);
}

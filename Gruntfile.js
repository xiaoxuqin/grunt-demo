module.exports = function(grunt){
    // 插件的具体配置信息
    grunt.initConfig({
        less:{
            complie: {
                files: {'dist/compiled.css':'css/*.less'}
            }
        }
    });

    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-less');

    // 构建的任务清单
    grunt.registerTask('default', ['less:complie']);
}

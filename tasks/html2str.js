/*
 * grunt-html2str
 * https://github.com/csbun/grunt-html2str
 *
 * Copyright (c) 2014 Hans Chan
 * Licensed under the MIT license.
 */

'use strict';

var chalk = require('chalk'),
    minify = require('html-minifier').minify;

module.exports = function(grunt) {

    grunt.registerMultiTask('html2str', 'Minify HTML 2 JavaScript String', function() {

        var options = this.options(),
            src = grunt.file.expand(options.src),
            dest = options.dest || '',
            prefix = options.prefix || '',
            suffix = options.suffix || '';

        // 预设的几种类型
        switch (options.type) {
        case 'node':
            prefix = 'module.exports = ';
            suffix = ';';
            break;
        case 'cmd':
            prefix = 'define(function (require, exports, module) {\n    module.exports = ';
            suffix = ';\n});';
            break;
        }

        // 补全输出路径
        if (dest && !/\/$/.test(dest)) {
            dest += '/';
        }
        // 创建目录
        if (dest) {
            grunt.file.mkdir(dest);
        }

        // 
        src.forEach(function (file) {
            var contentMax = grunt.file.read(file),
                // 压缩 html
                contentMin = minify(contentMax, {
                    // 删除注释
                    removeComments: true,
                    // 删除空格
                    collapseWhitespace: true,
                    // 压缩 js
                    minifyJS: true,
                    // 压缩 css
                    minifyCSS: true
                }),
                // 输出的文件名
                newFileName = dest + file.replace(/^(\/)?(.*\/)+/, '').replace(/\.[^\.]+$/, '.js');
            // 写文件
            grunt.file.write(newFileName, prefix + JSON.stringify(contentMin) + suffix);
            // 打印结果
            grunt.log.writeln(chalk.cyan(file) + ' -> ' + chalk.cyan(newFileName));
        });
    });
};

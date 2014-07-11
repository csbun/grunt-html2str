# grunt-html2str

> Minify HTML 2 JavaScript String

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html2str --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html2str');
```

## The "html2str" task

### Overview
In your project's Gruntfile, add a section named `html2str` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    html2str: {
        your_target: {    
            options: {
                src: 'tmp/src/*.html',
                dest: 'tmp/dest'
            }
        },
    },
});
```

### Options

#### options.src
Type: `String`
Default value: `''`

html files

#### options.dest
Type: `String`
Default value: `'./'`

javascript output path

#### options.prefix
Type: `String`
Default value: `''`

a string add before the output javascript

#### options.suffix
Type: `String`
Default value: `''`

a string add after the output javascript


#### options.type
Type: `String`
Default value: `''`

setting prefix & suffix with special type, 

- `type = 'node'`

```js
prefix = 'module.exports = ';
suffix = ';';
```

- `type = 'cmd'`

```js
prefix = 'define(function (require, exports, module) {\n    module.exports = ';
suffix = ';\n});';
```

### Usage Examples

#### Default Options
In this example, html file will change into a js file with the same name containing:

```js
"<html>...</html>"
```

```js
grunt.initConfig({
    html2str: {
        default_options: {    
            options: {
                src: 'tmp/src/*.html',
                dest: 'tmp/dest'
            }
        },
    },
});
```

#### Custom Options
In this example, custom prefix and suffix will add to the js file:

```js
(function(){var a="<html>...</html>";})();
```

```js
grunt.initConfig({
    html2str: {
        custom_options: {    
            options: {
                prefix: '(function(){var a=',
                suffix: ';})();',
                src: 'tmp/src/*.html',
                dest: 'tmp/dest'
            }
        },
    },
});
```

## Release History

- `0.0.1` Initial release.

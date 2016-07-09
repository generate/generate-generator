# generate-generator [![NPM version](https://img.shields.io/npm/v/generate-generator.svg?style=flat)](https://www.npmjs.com/package/generate-generator) [![NPM downloads](https://img.shields.io/npm/dm/generate-generator.svg?style=flat)](https://npmjs.org/package/generate-generator) [![Build Status](https://img.shields.io/travis/generate/generate-generator.svg?style=flat)](https://travis-ci.org/generate/generate-generator)

Generate a generate generator.

## Install

Install globally with [npm](https://www.npmjs.com/)

```sh
$ npm install --global generate-generator
```

**Example**

Templates are [customizable](#customization) and can be overridden.

![generate-generator demo](https://raw.githubusercontent.com/generate/generate-generator/master/docs/demo.gif)

<br>
<br>

## What is "Generate"?

Generate is a command line tool and developer framework for scaffolding out new GitHub projects using [generators](https://github.com/generate/generate/blob/master/docs/generators.md) and [tasks](https://github.com/generate/generate/blob/master/docs/tasks.md). Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for [gulp](http://gulpjs.com), [base](https://github.com/node-base/base) and [assemble](https://github.com/assemble/assemble) plugins, and much more.

For more information about Generate:

* Visit the [generate project](https://github.com/generate/generate)
* Visit the [generate documentation](https://github.com/generate/generate/blob/master/docs/)
* Find [generators on npm](https://www.npmjs.com/browse/keyword/generate-generator) (help us [author generators](https://github.com/generate/generate/blob/master/docs/micro-generators.md))

<br>
<br>

## Command line usage

### Install globally

**Installing the CLI**

To run the `generator` generator from the command line, you'll need to install [generate](https://github.com/generate/generate) globally first. You can do that now with the following command:

```sh
$ npm install --global generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory.

**Install generate-generator**

You may now install this module with the following command:

```sh
$ npm install --global generate-generator
```

### Running generate-generator

You should now be able to run `generate-generator` with the following command:

```sh
$ gen generator
```

**What will happen?**

Running `$ gen generator` will run the generator's [default task](#default), which will:

1. prompt you for any information that's missing
2. render templates using your answers
3. write a [the resulting files](#available-tasks) to the current working directory

**What you should see in the terminal**

If completed successfully, you should see both `starting` and `finished` events in the terminal, like the following:

```sh
[00:44:21] starting ...
...
[00:44:22] finished ✔
```

If you do not see one or both of those events, please [let us know about it](../../issues).

### Help

To see a general help menu and available commands for Generate's CLI, run:

```sh
$ gen help
```

### Running tasks

Tasks on `generate-generator` are run by passing the name of the task to run after the generator name, delimited by a comma:

```sh
$ gen generator:foo
       ^       ^
generator     task
```

**Example**

The following will run generator `foo`, task `bar`:

```sh
$ gen foo:bar
```

**Default task**

If a task is not explicitly passed Generate's CLI will run the `default` task.

<br>
<br>

## Available tasks

**Common files**

All of the tasks include the following files, unless specified otherwise:

* `editorconfig`
* `eslint`
* `gitattributes`
* `gitignore`
* `travis`
* `package`
* `license`

### [generator](index.js#L25)

Scaffold out a [generate](https://github.com/generate/generate) generator project.

**Example**

```sh
$ gen generator
```

Visit Generate's [documentation for tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

<br>
<br>

## Examples

### project:min

Example of running the [project:minimal](#minimal) task.

![generate-generator minimal project example](https://raw.githubusercontent.com/generate/generate-generator/master/docs/demo-minimal.gif)

### project:gulp-plugin

Example of running the [project:gulp-plugin](#gulp-plugin) task.

![generate-generator gulp plugin project example](https://raw.githubusercontent.com/generate/generate-generator/master/docs/demo-gulp-plugin.gif)

### Running multiple generators

Generate supports running multiple generators at once. Here are some examples of other generators that work well with `generate-generator`.

#### generate-install

Run [generate-install](https://github.com/generate/generate-install) **after** this generator to prompt to install any `dependencies` or `devDependencies` necessary for the generated files.

**Example**

![generate-generator generate-install example](https://raw.githubusercontent.com/generate/generate-generator/master/docs/demo-install.gif)

#### generate-dest

Run [generate-dest](https://github.com/generate/generate-dest) **before** this generator to prompt for the destination directory to use for generated files.

**Example**

![generate-generator generate-dest example](https://raw.githubusercontent.com/generate/generate-generator/master/docs/demo-dest.gif)

## API usage

Use `generate-generator` as a [plugin](https://github.com/generate/generate/blob/master/docs/plugins.md) in your own [generator](https://github.com/generate/generate/blob/master/docs/generators.md).

### Install locally

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save generate-generator
```

### Register as a plugin

Inside your own [generator](https://github.com/generate/generate/blob/master/docs/generators.md):

```js
module.exports = function(app) {
  // register generate-generator as a plugin
  app.use(require('generate-generator'));
};
```

### Run tasks

Programmatically run tasks from `generate-generator`:

```js
module.exports = function(app) {
  // register generate-generator as a plugin
  app.use(require('generate-generator'));

  // run the `default` task on generate-generator
  app.task('foo', function(cb) {
    app.generate('generate-generator', cb);
  });

  // or run a specific task on generate-generator 
  // (where `foo` is the name of the task to run)
  app.task('bar', function(cb) {
    app.generate('generate-generator:foo', cb);
  });
};
```

Visit the [generator docs](https://github.com/generate/generate/blob/master/docs/generators.md) to learn more about creating, installing, using and publishing generators.

<br>
<br>

## Customization

The following instructions can be used to override settings in `generate-generator`. Visit the [Generate documentation](https://github.com/generate/generate/blob/master/docs/overriding-defaults.md) to learn about other ways to override defaults.

### Destination directory

To customize the destination directory, install [generate-dest](https://github.com/generate/generate-dest) globally, then in the command line prefix `dest` before any other generator names.

For example, the following will prompt you for the destination path to use, then pass the result to `generate-generator`:

```sh
$ gen dest generator
```

### Overriding templates

You can override a template by adding a template of the same name to the `templates` directory in user home. For example, to override the `package.json` template, add a template at the following path `~/generate/generate-generator/templates/package.json`, where `~/` is the user-home directory that `os.homedir()` resolves to on your system.

## Related projects

You might also be interested in these projects:

[generate](https://www.npmjs.com/package/generate): Generate is a command line tool and developer framework for scaffolding out new GitHub projects… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Generate is a command line tool and developer framework for scaffolding out new GitHub projects. Generators are easy to create and combine. Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for gulp, assemble and Base plugins.")

## Contributing

This document was generated by [verb-readme-generator](https://github.com/verbose/verb-readme-generator) (a [verb](https://github.com/verbose/verb) generator), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Or visit the [verb-readme-generator](https://github.com/verbose/verb-readme-generator) project to submit bug reports or pull requests for the readme layout template.

## Building docs

_(This document was generated by [verb-readme-generator](https://github.com/verbose/verb-readme-generator) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-readme-generator && verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 09, 2016._
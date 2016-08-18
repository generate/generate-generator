'use strict';

var isValid = require('is-valid-app');

module.exports = function(app) {
  if (!isValid(app, 'generate-generator')) return;
  app.option('layout', false);

  /**
   * Plugin
   */

  app.use(require('generate-project'));
  app.use(require('generate-git'));

  /**
   * Scaffold out a [generate][] generator project. Alias for the [generator](#generator)
   * task, to allow running the generator with the following command:
   *
   * ```sh
   * $ gen generator
   * ```
   * @name generator:default
   * @api public
   */

  app.task('default', ['generator']);
  app.task('generator', ['prompt-data', 'test', 'dotfiles', 'main', 'rootfiles']);

  /**
   * Scaffold out a minimal [Generate][] generator project.
   *
   * ```sh
   * $ gen generator:min
   * # or
   * $ gen generator:minimal
   * ```
   * @name generator:minimal
   * @api public
   */

  app.task('min', ['minimal']);
  app.task('minimal', [
    'prompt-data',
    'gitignore-node',
    'main',
    'license-mit',
    'package',
    'readme'
  ]);

  /**
   * Scaffold out a project for a [Generate][] micro-generator.
   *
   * ```sh
   * $ gen generator:micro
   * ```
   * @name generator:micro
   * @api public
   */

  app.task('micro', [
    'prompt-data',
    'test',
    'dotfiles',
    'main-micro',
    'rootfiles',
    'prompt-install',
    'prompt-git'
  ]);

  /**
   * Write a `generator.js` file to the current working directory.
   *
   * ```sh
   * $ gen generator:file
   * ```
   * @name generator:file
   * @api public
   */

  task(app, 'main', ['templates/generator.js', 'templates/index.js']);

  /**
   * Write the `generator.js` and `index.js` files for a micro-generator.
   *
   * ```sh
   * $ gen generator:main-micro
   * ```
   * @name generator:main-micro
   * @api public
   */

  task(app, 'main-micro', ['templates/generator-micro.js', 'templates/index.js']);

  /**
   * Generate the LICENSE, package.json and README.md files for a generator project.
   *
   * ```sh
   * $ gen generator:rootfiles
   * ```
   * @name generator:rootfiles
   * @api public
   */

  app.task('rootfiles', [
    'license-mit',
    'package',
    'readme'
  ]);

  /**
   * Write a `test.js` file to the current working directory, with unit tests for
   * a [generate][] generator.
   *
   * ```sh
   * $ gen generator:test
   * ```
   * @name generator:test
   * @api public
   */

  task(app, 'test', ['templates/tests/test.js', 'templates/tests/plugin.js']);
  task(app, 'test-basic', ['templates/tests/basic.js']);

  /**
   * Generate files in the generator's `templates` directory.
   *
   * ```sh
   * $ gen generator:templates
   * ```
   * @name generator:templates
   * @api public
   */

  task(app, 'templates', 'templates/templates/*.*');

  /**
   * Initiates a prompt to ask if you'd like to initialize a git repository with first commit.
   *
   * ```sh
   * $ gen generator:prompt-git
   * ```
   * @name generator:prompt-git
   * @api public
   */

  app.task('prompt-git', function(cb) {
    if (app.options.git === false) return cb();
    app.confirm('git', 'Want to initialize a git repository with first commit?');
    app.ask('git', function(err, answers) {
      if (err) {
        cb(err);
        return;
      }

      if (answers.git) {
        app.build('first-commit', cb);
      } else {
        cb();
      }
    });
  });

  /**
   * Don't ask the same questions more than once
   */

  app.task('prompt-data', ['prompt'], function(cb) {
    app.option('askWhen', 'not-answered');
    cb();
  });
};

/**
 * Create a task with the given `name` and glob `pattern`
 */

function task(app, name, patterns) {
  app.task(name, function() {
    return file(app, patterns);
  });
}

function file(app, patterns) {
  return app.src(patterns, {cwd: __dirname})
    .pipe(app.renderFile('*', {layout: null})).on('error', console.log)
    .pipe(app.conflicts(app.cwd))
    .pipe(app.dest(app.cwd));
}

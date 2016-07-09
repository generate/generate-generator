'use strict';

var isValid = require('is-valid-app');

module.exports = function(app) {
  if (!isValid(app, 'generate-generator')) return;

  /**
   * Plugins
   */

  app.use(require('generate-project'));

  /**
   * Scaffold out a [generate][] generator project. Alias for the [generator](#generator)
   * task, to allow running the generator with the following command:
   *
   * ```sh
   * $ gen generator
   * ```
   * @name default
   * @api public
   */

  app.task('default', ['generator']);

  /**
   * Scaffold out a [generate][] generator project. Also aliased as the [default](#default) task.
   *
   * ```sh
   * $ gen generator:generator
   * ```
   * @name generator
   * @api public
   */

  app.task('generator', ['files', 'file', 'test', 'verb']);

  /**
   * Write a `generator.js` file to the current working directory.
   *
   * ```sh
   * $ gen generator:file
   * ```
   * @name file
   * @api public
   */

  task(app, 'file', 'templates/generator.js');

  /**
   * Write a `test.js` file to the current working directory, with unit tests for
   * a [generate][] generator.
   *
   * ```sh
   * $ gen generator:test
   * ```
   * @name test
   * @api public
   */

  task(app, 'test', ['templates/test.js', 'templates/fixtures.md']);

  /**
   * Write a `.verb.md` readme template to the current working directory, with the
   * information and sections recommended for Generate a generator.
   *
   * ```sh
   * $ gen generator:verb
   * ```
   * @name verb
   * @api public
   */

  task(app, 'verb', 'templates/_verb.md');
};

/**
 * Create a task with the given `name` and glob `pattern`
 */

function task(app, name, pattern) {
  app.task(name, function() {
    var dest = app.options.dest || app.cwd;
    return app.src(pattern, {cwd: __dirname})
      .pipe(app.renderFile('*'))
      .pipe(app.conflicts(dest))
      .pipe(app.dest(dest));
  });
}

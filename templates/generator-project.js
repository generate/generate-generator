---
rename:
  basename: 'generator.js'
install:
  dependencies: ['generate-project', 'is-valid-app']
---
'use strict';

var isValid = require('is-valid-app');

module.exports = function(app) {
  if (!isValid(app, '<%= name %>')) return;

  /**
   * Plugins
   */

  app.use(require('generate-project'));

  /**
   * Scaffold out a(n) <%= alias %> project. Also aliased as the [default](#default) task.
   *
   * ```sh
   * $ gen <%= alias %>:<%= alias %>
   * ```
   * @name <%= alias %>
   * @api public
   */

  app.task('<%= alias %>', ['files', 'generator', 'index']);
  task(app, 'generator', ['generatorjs', 'index', 'install']);

  /**
   * Write a `generator.js` file to the current working directory.
   *
   * ```sh
   * $ gen <%= alias %>:file
   * ```
   * @name file
   * @api public
   */

  task(app, 'generatorjs', 'templates/generator.js');

  /**
   * Write a `generator.js` file to the current working directory.
   *
   * ```sh
   * $ gen <%= alias %>:file
   * ```
   * @name file
   * @api public
   */

  task(app, 'index', 'templates/index.js');

  /**
   * Generate the files in the `templates` directory.
   *
   * ```sh
   * $ gen <%= alias %>:templates
   * ```
   * @name templates
   * @api public
   */

  task(app, 'templates', 'templates/templates/*');

  /**
   * Scaffold out a new <%= alias %> project. This task is an alias for the [<%= alias %>](#<%= alias %>)
   * task, to allow running this generator with the following command:
   *
   * ```sh
   * $ gen <%= alias %>
   * ```
   * @name default
   * @api public
   */

  app.task('default', ['<%= alias %>']);
};

/**
 * Create a task with the given `name` and glob `pattern`
 */

function task(app, name, pattern, dependencies) {
  app.task(name, dependencies || [], function(cb) {
    return file(app, pattern);
  });
}

function file(app, pattern) {
  var opts = extend({}, app.base.options, app.options);
  var srcBase = opts.srcBase || path.join(__dirname, 'templates');
  return app.src(pattern, {cwd: srcBase})
    .pipe(app.renderFile('*', app.base.cache.data))
    .pipe(app.conflicts(app.cwd))
    .pipe(app.dest(app.cwd));
}

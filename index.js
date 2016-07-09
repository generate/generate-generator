'use strict';

var path = require('path');
var isValid = require('is-valid-app');

module.exports = function(app) {
  if (!isValid(app, 'generate-generator')) return;

  /**
   * Plugins
   */

  app.use(require('generate-project'));

  /**
   * Scaffold out a [generate][] generator project.
   *
   * ```sh
   * $ gen generator
   * ```
   * @name generator
   * @api public
   */

  app.task('generator', ['files'], function(cb) {
    var dest = app.options.dest || app.cwd;
    return app.src('templates/*.js', {cwd: __dirname})
      .pipe(app.renderFile('*'))
      .pipe(app.conflicts(dest))
      .pipe(app.dest(dest));
  });

  app.task('default', ['generator']);
};

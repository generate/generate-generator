---
rename:
  basename: 'generator.js'
install:
  dependencies: ['is-valid-app']
---
'use strict';

var isValid = require('is-valid-app');

module.exports = function(app) {
  // return if the generator is already registered
  if (!isValid(app, '<%= name %>')) return;

  /**
   * Generates a `<%= alias %>` file to the current working directory or
   * specified `--dest`.
   *
   * ```sh
   * $ gen <%= alias %>
   * $ gen <%= alias %> --dest ./foo
   * ```
   * @name <%= alias %>
   * @api public
   */

  app.task('default', ['<%= alias %>']);
  app.task('<%= alias %>', function(cb) {
    return app.src('templates/<%= alias %>', { cwd: __dirname })
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(function(file) {
        file.basename = '<%= alias %>';
        return app.cwd;
      }))
  });
};

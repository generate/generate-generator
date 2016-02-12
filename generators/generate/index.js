'use strict';

module.exports = function(app, base, env) {
  app.task('generator', function(cb) {
    return app.src('templates/generator.js', {cwd: __dirname})
      .pipe(app.renderFile('*'))
      .pipe(app.dest('.'));
  });

  app.task('default', ['generator']);
};

'use strict';

module.exports = function(app, base, env) {
  app.task('assemblefile', function(cb) {
    return app.src('templates/assemblefile.js', {cwd: __dirname})
      .pipe(app.renderFile('*'))
      .pipe(app.dest('.'));
  });

  app.task('default', ['assemblefile']);
};

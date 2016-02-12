'use strict';

module.exports = function(app, name, cwd) {
  app.task(name, function(cb) {
    return app.src('templates/' + name + '.js', {cwd: cwd})
      .pipe(app.renderFile('*'))
      .pipe(app.dest('.'));
  });

  app.task('default', [name]);
};

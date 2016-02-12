'use strict';

module.exports = function(gen, base) {
  gen.task('<%= alias %>', function(cb) {
    cb();
  });

  gen.task('default', ['<%= alias %>']);
};

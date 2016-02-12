'use strict';

var path = require('path');
var hasGlob = require('has-glob');
var extend = require('extend-shallow');
var glob = require('matched');

module.exports = function(config, cwd) {
  if (typeof config === 'string') {
    cwd = config;
    config = {};
  }

  return function(app) {
    var register = this.register;

    this.define('register', function(patterns, options) {
      if (!hasGlob(patterns)) {
        return register.apply(this, arguments);
      }

      if (typeof cwd === 'undefined') {
        if (module.parent && module.parent.id) {
          cwd = path.dirname(module.parent.id);
        } else {
          cwd = process.cwd();
        }
      }

      var opts = extend({cwd: cwd}, config, options);
      var files = glob.sync(patterns, opts);

      var len = files.length;
      var idx = -1;

      while (++idx < len) {
        var name = files[idx];
        var fp = path.resolve(opts.cwd, name);
        var basename = path.basename(path.dirname(fp));
        register.call(this, basename, fp);
        var gen = this.getGenerator(basename);
        gen.option(this.options);
        gen.data(this.cache.data);
      }
    });
  };
}

/*!
 * <%= ask('name') %> (https://github.com/<%= ask('owner') %>/<%= ask('name') %>)
 *
 * Copyright (c) <%= year %>, <%= ask('author.name') %>.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('<%= name %>');

function generator(app, base) {
  app.use(generator.plugin());
}

generator.plugin = function(options) {
  return function fn(app) {
    if (this.isRegistered('<%= name %>')) return;
    debug('initializing <%s>, from <%s>', __filename, module.parent.id);

    this.define('<%= alias %>', function() {
      debug('running <%= alias %>');

    });

    return fn;
  };
};

/**
 * Expose `generator`
 */

module.exports = generator
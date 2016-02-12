'use strict';

var task = require('../task');

module.exports = function(app) {
  task(app, 'verbfile', __dirname);
};

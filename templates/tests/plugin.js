---
install:
  devDependencies: ['generate']
rename:
  dirname: 'test'
  basename: 'plugin.js'
---
'use strict';

require('mocha');
var assert = require('assert');
var generate = require('generate');
var generator = require('<%= relative(obj.dest || "./") %>');
var app;

describe('<%= ask("name") %>', function() {
  beforeEach(function() {
    app = generate();
  });

  describe('plugin', function() {
    it('should add tasks to the instance', function() {
      app.use(generator);
      assert(app.tasks.hasOwnProperty('default'));
      assert(app.tasks.hasOwnProperty('<%= ask("alias") %>'));
    });

    it('should only register the plugin once', function(cb) {
      var count = 0;
      app.on('plugin', function(name) {
        if (name === '<%= ask("name") %>') {
          count++;
        }
      });
      app.use(generator);
      app.use(generator);
      app.use(generator);
      assert.equal(count, 1);
      cb();
    });
  });
});

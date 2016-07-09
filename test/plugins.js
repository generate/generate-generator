'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var generate = require('generate');
var npm = require('npm-install-global');
var del = require('delete');
var generator = require('..');
var app;

var cwd = path.resolve.bind(path, __dirname, 'actual');

function exists(name, cb) {
  return function(err) {
    if (err) return cb(err);
    var filepath = cwd(name);
    fs.stat(filepath, function(err, stat) {
      if (err) return cb(err);
      assert(stat);
      del(path.dirname(filepath), cb);
    });
  };
}

describe('plugins', function() {
  this.slow(250);

  if (!process.env.CI && !process.env.TRAVIS) {
    before(function(cb) {
      npm.maybeInstall('generate', cb);
    });
  }

  beforeEach(function() {
    app = generate({silent: true});
    app.cwd = cwd();
    app.option('dest', cwd());

    // pre-populate template data to avoid prompts from `ask` helper
    app.option('askWhen', 'not-answered');
    app.data({
      author: {
        name: 'Jon Schlinkert',
        username: 'jonschlnkert',
        url: 'https://github.com/jonschlinkert'
      },
      basename: 'LICENSE',
      project: {
        name: 'foo',
        description: 'bar',
        version: '0.1.0'
      }
    });
  });

  describe('editorconfig', function() {
    it('should run the `editorconfig` task with .build', function(cb) {
      app.use(generator);
      app.build('editorconfig', exists('.editorconfig', cb));
    });

    it('should run the `editorconfig` task with .generate', function(cb) {
      app.use(generator);
      app.generate('editorconfig', exists('.editorconfig', cb));
    });
  });

  describe('eslint', function() {
    it('should run the `eslint` task with .build', function(cb) {
      app.use(generator);
      app.build('eslint', exists('.eslintrc.json', cb));
    });

    it('should run the `eslint` task with .generate', function(cb) {
      app.use(generator);
      app.generate('eslint', exists('.eslintrc.json', cb));
    });
  });

  describe('license', function() {
    it('should run the `license` task with .build', function(cb) {
      app.use(generator);
      app.build('license', exists('LICENSE', cb));
    });

    it('should run the `license` task with .generate', function(cb) {
      app.use(generator);
      app.generate('license', exists('LICENSE', cb));
    });
  });

  describe('package', function() {
    it('should run the `package` task with .build', function(cb) {
      app.use(generator);
      app.build('package', exists('package.json', cb));
    });

    it('should run the `package` task with .generate', function(cb) {
      app.use(generator);
      app.generate('package', exists('package.json', cb));
    });
  });

  describe('travis', function() {
    it('should run the `travis` task with .build', function(cb) {
      app.use(generator);
      app.build('travis', exists('.travis.yml', cb));
    });

    it('should run the `travis` task with .generate', function(cb) {
      app.use(generator);
      app.generate('travis', exists('.travis.yml', cb));
    });
  });
});

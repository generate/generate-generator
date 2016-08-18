---
rename:
  basename: 'test.js'
  dirname: 'test'
---
<% if (obj.babel) { %>
import assert from 'assert';
import <%= alias %> from '<%= relative(typeof dest === "string" ? dest : "./") %>';
<% } else { %>
'use strict';

var assert = require('assert');
var <%= alias %> = require('<%= relative(typeof dest === "string" ? dest : "./") %>');
<% } %>

describe('Before <%= name %> is published', function () {
  it('should have real unit tests', function () {
    assert(false, 'expected <%= author.name %> to add real unit tests!');
  });
});

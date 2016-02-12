'use strict';

/**
 * Since this verbfile.js exports a function, it's referred to
 * as a verb "generator".
 *
 * We've already extended this generator with `verb-generate-readme`,
 * which makes the `readme` task work still. But you can remove
 * this and add any other code you want to the generator.
 */

module.exports = function(verb) {
  verb.extendWith('verb-generate-readme');
  <% if (typeof task !== 'undefined') { %>
  verb.task('<%= task %>', function(cb) {
    cb();
  });
  <% } %>
  <% if (typeof helper !== 'undefined') { %>
  verb.helper('<%= helper %>', function(str) {
    return str;
  });
  <% } %>
  verb.task('default', ['readme']);
};

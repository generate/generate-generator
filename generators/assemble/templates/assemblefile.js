'use strict';

/**
 * Since this assemblefile.js exports a function, it's referred to
 * as an assemble "generator".
 *
 * We've already extended this generator with `assemble-generate-foo`,
 * which makes the `foo` task work. But you can remove this and add
 * any other code you want to the generator.
 */

module.exports = function(app) {
  app.extendWith('assemble-generate-foo');
  <% if (typeof task !== 'undefined') { %>
  app.task('<%= task %>', function(cb) {
    cb();
  });
  <% } %>
  <% if (typeof helper !== 'undefined') { %>
  app.helper('<%= helper %>', function(str) {
    return str.toLowerCase();
  });
  <% } %>
  app.task('default', ['foo']);
};

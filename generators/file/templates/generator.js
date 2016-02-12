'use strict';

module.exports = function(app) {
  <% if (typeof invoke !== 'undefined') { %>
  app.extendWith('<%= invoke %>');
  <% } %>
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
  <% if (typeof task !== 'undefined') { %>
  app.task('default', ['<%= task %>']);
  <% } else if (typeof invoke !== 'undefined') { %>
  app.task('default', ['<%= invoke %>']);
  <% } else { %>
  app.task('default', function(cb) {
    console.log('task >', this.name);
    cb();
  });
  <% } %>
};

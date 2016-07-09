---
rename:
  basename: index.js
---
'use strict';
<% var alias = strip("generate-", project.name) %>
module.exports = function(app) {
  app.task('<%= strip("generate-", project.name) %>', function(cb) {
    cb();
  });
  app.task('default', ['<%= strip("generate-", project.name) %>']);
};

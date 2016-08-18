---
render: false
rename:
  dirname: templates
---
<% if (obj.babel) { %>export default {};<% } else { %>'use strict';

module.exports = require('./generator');
<% } %>
import React from 'react';
import Relay from 'react-relay';

function <%- ComponentName -%>({content<% if (AccessToUrl == "Yes") { %>, location<% } %>}) {
  return (
    <div>

    </div>
  );
}

<% if (AccessToUrl == "Yes") { %>
export default Relay.createContainer(withRouter(<%- ComponentName -%>), {
<% } else { %>
export default Relay.createContainer(<%- ComponentName -%>, {
<% } %>
  fragments: {
    content: () => Relay.QL`
      fragment on Content<%- ComponentName -%> {
      }
    `
  }
});

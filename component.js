<% if (StatefulComponent == "Yes") { %>
import React { Component } from 'react';
<% } else { %>
import React from 'react';
<% } %>
import Relay from 'react-relay';

<% if (StatefulComponent == "Yes") { %>
export default class <%- ComponentName -%> extends Component {
  // Don't make allocations in the constructor
  constructor(){
    super();
  }

  // Called client-side when the component appears on the page.
  componentDidMount = () => {
  }

  // Called when the DOM updates to insert the new HTML
  render() {
    <div>

    </div>
  }
}
<% } else { %>
function <%- ComponentName -%>({content<% if (AccessToUrl == "Yes") { %>, location<% } %>}) {
  return (
    <div>

    </div>
  );
}
<% } %>

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

import React from 'react';
import Relay from 'react-relay';

function <%- ComponentName -%>({content, location}) {
  return (
    <div>

    </div>
  );
}

export default Relay.createContainer(withRouter(<%- ComponentName -%>), {
  fragments: {
    content: () => Relay.QL`
      fragment on Content<%- ComponentName -%> {
      }
    `
  }
});

import React from 'react';

let Sut;

const props = {
  content: {

  }
};

describe('<% ComponentName %>', function() {
  before(function(){
    mockery.enable({ useCleanCache: true });
    mockery.warnOnUnregistered(false);
    mockery.registerMock('react-relay', relayMock({}));
    <% if (ToggleMock == "Yes") { %>
    mockery.registerMock('./feature-toggle-client', global.toggleMock);
    <% } %>
    Sut = require('./index').default;
    Sut.validate(props, {shallow: true});
    renderDom = enzyme.shallow(<Sut {...props}/>).shallow();
  });

  after(function() {
    mockery.resetCache();
    mockery.deregisterAll();
    mockery.disable();
  });

  describe('', function() {
    it('', function() {
      // Add first test here.
    });
  });
});

import React from 'react';
import Enzyme from 'enzyme';
import Authentication from '../../../pages/authentication/Authentication.js';

describe("List", () => {
  let wrapper;
  
  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<Authentication />).get(0))
  });

  afterEach(() => {
      wrapper = null;
  });
 
  it("Page should exist", () => {
      const title = wrapper.find("#authentication-page");
      expect(title.exists()).toBeTruthy();
  });
});
 
 
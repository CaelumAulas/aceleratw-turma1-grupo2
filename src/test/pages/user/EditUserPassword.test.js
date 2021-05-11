import React from 'react';
import Enzyme from 'enzyme';
import EditUserPassword from '../../../pages/user/EditUserPassword.js';

describe("EditUserPassword", () => {
  let wrapper;
  
  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<EditUserPassword />).get(0))
  });

  afterEach(() => {
      wrapper = null;
  });
 
  it("Edit Password page should exist", () => {
      const editPass = wrapper.find("#edit-pass-page");
      expect(editPass.exists()).toBeTruthy();
  });
});
 
 
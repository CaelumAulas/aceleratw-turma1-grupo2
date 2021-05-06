import React from 'react';
import Enzyme from 'enzyme';
import EditPassword from '../../../pages/newUser/EditPassword.js';

describe("EditPassword", () => {
  let wrapper;
  
  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<EditPassword />).get(0))
  });

  afterEach(() => {
      wrapper = null;
  });
 
  it("Edit Password page should exist", () => {
      const editPass = wrapper.find("#edit-pass-page");
      expect(editPass.exists()).toBeTruthy();
  });
});
 
 
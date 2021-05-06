import React from 'react';
import Enzyme from 'enzyme';
import EditPassword from '../../../components/molecules/EditPassword.jsx';

describe("EditPassword", () => {
  let wrapper;
  
  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<EditPassword />).get(0))
  });

  afterEach(() => {
      wrapper = null;
  });
 
  it("Old Password should exist", () => {
      const old = wrapper.find("#old_pwd");
      expect(old.exists()).toBeTruthy();
  });

  it("New Password should exist", () => {
    const newPwd = wrapper.find("#new_pwd");
    expect(newPwd.exists()).toBeTruthy();
  });

  it("New Password should exist", () => {
    const confPwd = wrapper.find("#conf_pwd");
    expect(confPwd.exists()).toBeTruthy();
  });

  it("Save button should exist", () => {
    const btnSave = wrapper.find("#btnSave");
    expect(btnSave.exists()).toBeTruthy();
  });

  it("Cancel button should exist", () => {
    const btnCancel = wrapper.find("#btnCancel");
    expect(btnCancel.exists()).toBeTruthy();
  });
});
 
 
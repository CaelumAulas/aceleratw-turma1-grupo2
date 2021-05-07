import React from 'react';
import Enzyme from 'enzyme';
import Dashboard from '../../../pages/dashboard/Dashboard.js';

describe("List", () => {
  let wrapper;
  
  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<Dashboard />).get(0))
  });

  afterEach(() => {
      wrapper = null;
  });
 
  it("Page should exist", () => {
      const title = wrapper.find("#dashboard-page");
      expect(title.exists()).toBeTruthy();
  });
});
 
 
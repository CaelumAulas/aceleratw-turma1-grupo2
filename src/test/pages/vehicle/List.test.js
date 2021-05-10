import React from 'react';
import Enzyme from 'enzyme';
import List from '../../../pages/vehicle/List.js';

describe("List", () => {
  let wrapper;
  
  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<List />).get(0))
  });

  afterEach(() => {
      wrapper = null;
  });
 
  it("Page should exist", () => {
      const title = wrapper.find("#list-cars-page");
      expect(title.exists()).toBeTruthy();
  });
});
 
 
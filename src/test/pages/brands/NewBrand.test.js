import React from 'react';
import Enzyme from 'enzyme';
import NewBrand from '../../../pages/brands/NewBrand.js';

describe("NewBrand", () => {
  let wrapper;
  
  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<NewBrand />).get(0))
  });

  afterEach(() => {
      wrapper = null;
  });
 
  it("NewBrand page should exist", () => {
      const newBrand = wrapper.find("#new-brands-page");
      expect(newBrand.exists()).toBeTruthy();
  });
});
 
 
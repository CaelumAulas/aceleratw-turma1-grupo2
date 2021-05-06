import React from 'react';
import Enzyme from 'enzyme';
import NewBrand from '../../../components/molecules/NewBrand.jsx';

describe("NewBrand", () => {
  let wrapper;
  
  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<NewBrand />).get(0))
  });

  afterEach(() => {
      wrapper = null;
  });
 
  it("Brand should exist", () => {
      const brand = wrapper.find("#brand");
      expect(brand.exists()).toBeTruthy();
  });

  it("Brand save button should exist", () => {
    const btnSave = wrapper.find("#btnSave");
    expect(btnSave.exists()).toBeTruthy();
  });

  it("Brand cancel button should exist", () => {
    const btnCancel = wrapper.find("#btnCancel");
    expect(btnCancel.exists()).toBeTruthy();
  });
});
 
 
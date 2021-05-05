import React from 'react';
import List from '../../../pages/cars/List.js';
var enzyme = require('enzyme');

describe("List", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = enzyme.shallow(<List />);
  });

  afterEach(() => {
    wrapper = null;
  });
 
  it("Test should find data grid", () => {
      const grid = wrapper.find("#data-grid");
      expect(grid.exists()).toBeTruthy();
  });
});
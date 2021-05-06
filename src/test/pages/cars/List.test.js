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

  it("Button new should exist", () => {
    const btn = wrapper.find("#new").at(0);
    expect(btn.exists()).toBeTruthy();
  });

  it("Button edit should exist", () => {
    const btn = wrapper.find("#edit").at(0);
    expect(btn.exists()).toBeTruthy();
  });

  it("Button delete should exist ", () => {
    const btn = wrapper.find("#delete").at(0);
    expect(btn.exists()).toBeTruthy();
  });
});
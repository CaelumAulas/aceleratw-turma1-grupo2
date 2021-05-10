import React from 'react';
import Enzyme from 'enzyme';
import NewVehicle from '../../../pages/vehicle/NewVehicle.js';

describe("NewVehicle", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState")
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<NewVehicle />).get(0))
  });

  afterEach(() => {
      jest.clearAllMocks();
  });
 
  it("Field brand should exist", () => {
    const title = wrapper.find("#brand").at(0);
    expect(title.exists()).toBeTruthy();
  });

  it("Field vehicleModel should exist", () => {
    const title = wrapper.find("#vehicleModel").at(0);
    expect(title.exists()).toBeTruthy();
  });

  it("Field year should exist", () => {
    const title = wrapper.find("#year").at(0);
    expect(title.exists()).toBeTruthy();
  });

  it("Field value should exist", () => {
    const title = wrapper.find("#value").at(0);
    expect(title.exists()).toBeTruthy();
  });
});
 
 
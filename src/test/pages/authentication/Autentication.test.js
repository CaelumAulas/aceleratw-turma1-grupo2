import React from 'react';
import Enzyme from 'enzyme';
import Authentication from '../../../pages/authentication/Authentication.js';

describe("Authentication", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState")
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<Authentication />).get(0))
  });

  afterEach(() => {
      jest.clearAllMocks();
  });
 
  it("Email should exist", () => {
      const title = wrapper.find("#email").at(0);
      expect(title.exists()).toBeTruthy();
  });

  it("Password should exist", () => {
    const pass = wrapper.find("#password").at(0);
    expect(pass.exists()).toBeTruthy();
  });

  it("BtnClick should exist", () => {
    const btnClick = wrapper.find("#btnClick").at(0);
    expect(btnClick.exists()).toBeTruthy();
  });
});
 
 
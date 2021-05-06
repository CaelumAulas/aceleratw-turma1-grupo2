import React from 'react';
import Enzyme from 'enzyme';
import NewUser from '../../../pages/newUser/NewUser.js';

describe("NewUser", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState")
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
      wrapper = Enzyme.mount(Enzyme.shallow(<NewUser />).get(0))
  });

  afterEach(() => {
      jest.clearAllMocks();
  });
 
  it("Field user should exist", () => {
      const title = wrapper.find("#user").at(0);
      expect(title.exists()).toBeTruthy();
  });

  it("Field password should exist", () => {
    const title = wrapper.find("#password").at(0);
    expect(title.exists()).toBeTruthy();
  });

  it("Field copyPassword should exist", () => {
    const title = wrapper.find("#copyPassword").at(0);
    expect(title.exists()).toBeTruthy();
  });
});
 
 
import React from 'react';
import { render, screen }  from '@testing-library/react'
import EditUserPassword from '../../../components/molecules/EditUserPassword.jsx';
describe("EditPassword", () => {

  describe("Test if exists", ()=>{
    it("Last password exist", () => {
      render(<EditUserPassword />);
      expect(screen.getByTestId('old_pwd')).toBeInTheDocument();
    })
    it("New password exist", () => {
      render(<EditUserPassword />);
      expect(screen.getByTestId('new_pwd')).toBeInTheDocument();
    })
    it("Confirm password should exist", () => {
      render(<EditUserPassword />);
      expect(screen.getByTestId('conf_pwd')).toBeInTheDocument();
    })
    it("Button save should exist", () => {
      render(<EditUserPassword />);
      expect(screen.getByTestId('btnSave')).toBeInTheDocument();
    })
    it("Button cancel should exist", () => {
      render(<EditUserPassword />);
      expect(screen.getByTestId('btnCancel')).toBeInTheDocument();
    })
  })
});
 
 
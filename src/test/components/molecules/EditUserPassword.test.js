import React from 'react'
import { render, screen }  from '@testing-library/react'
import EditUserPassword from '../../../components/molecules/EditUserPassword.jsx'
import { MemoryRouter } from "react-router-dom";

describe("EditPassword", () => {

  describe("Test if exists", ()=>{
    it("Field Last password exist", () => {
      render(
        <MemoryRouter initialEntries={["/editar-senha"]}>
          <EditUserPassword />
        </MemoryRouter>
      );
      expect(screen.getByTestId('oldPassword')).toBeInTheDocument()
    })
    it("Field New password exist", () => {
      render(
        <MemoryRouter initialEntries={["/editar-senha"]}>
          <EditUserPassword />
        </MemoryRouter>
      );
      expect(screen.getByTestId('newPassword')).toBeInTheDocument()
    })
    it("Button confirm password should exist", () => {
      render(
        <MemoryRouter initialEntries={["/editar-senha"]}>
          <EditUserPassword />
        </MemoryRouter>
      );
      expect(screen.getByTestId('confirmPassword')).toBeInTheDocument()
    })
    it("Button save should exist", () => {
      render(
        <MemoryRouter initialEntries={["/editar-senha"]}>
          <EditUserPassword />
        </MemoryRouter>
      );
      expect(screen.getByTestId('btnSave')).toBeInTheDocument()
    })
    it("Button cancel should exist", () => {
      render(
        <MemoryRouter initialEntries={["/editar-senha"]}>
          <EditUserPassword />
        </MemoryRouter>
      );
      expect(screen.getByTestId('btnCancel')).toBeInTheDocument()
    })
  })
})
 
import React from 'react'
import EditUserPassword from '../../../pages/user/EditUserPassword.js'
import { render, screen, fireEvent }  from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"

describe("EditUserPassword", () => { 

  window.alert = jest.fn();
  test("test form", () => {
    render(
      <MemoryRouter initialEntries={["/editar-senha"]}>
        <EditUserPassword />
      </MemoryRouter>
    );
    const onSubmit = jest.fn();
    const { getByText } = render(<form onSubmit={onSubmit} />);
    fireEvent.click(getByText("Salvar"));
    expect(onSubmit).toBeDefined();
    window.alert.mockClear();
  });

  describe("Testing if field and buttons exists", ()=>{
    it("Field old password exist", () => {
      render(
        <MemoryRouter initialEntries={["/editar-senha"]}>
          <EditUserPassword />
        </MemoryRouter>
      )
      expect(screen.getByTestId('oldPassword')).toBeInTheDocument()
    })

    it("Button New password exist", () => {
      render(
        <MemoryRouter initialEntries={["/editar-senha"]}>
          <EditUserPassword />
        </MemoryRouter>
      )
      expect(screen.getByTestId('newPassword')).toBeInTheDocument()
    })

    it("Button Confirm password should exist", () => {
      render(
        <MemoryRouter initialEntries={["/editar-senha"]}>
          <EditUserPassword />
        </MemoryRouter>
      )
      expect(screen.getByTestId('confirmPassword')).toBeInTheDocument()
    })

    it("Button save should exist", () => {
      render(
        <MemoryRouter initialEntries={["/editar-senha"]}>
          <EditUserPassword />
        </MemoryRouter>
      )
      expect(screen.getByTestId('btnSave')).toBeInTheDocument()
    })
    
    it("Button cancel should exist", () => {
      render(
        <MemoryRouter initialEntries={["/editar-senha"]}>
          <EditUserPassword />
        </MemoryRouter>
      )
      expect(screen.getByTestId('btnCancel')).toBeInTheDocument()
    })
  })
})
 
 
import { render, screen, fireEvent }  from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from "react-router-dom";
import NewUser from '../../../components/organisms/NewUser.jsx'
import "@testing-library/jest-dom/extend-expect";
import { getByRole } from '@testing-library/dom';

describe("NewUser", () => {
  window.alert = jest.fn();
  test("test form", () => {
    render(
      <MemoryRouter initialEntries={["/cadastro-usuario"]}>
        <NewUser />
      </MemoryRouter>
    );
    const onSubmit = jest.fn();
    const { getByText } = render(<form onSubmit={onSubmit} />);
    fireEvent.click(getByText("Cadastrar"));
    expect(onSubmit).toBeDefined();
    window.alert.mockClear();
  });

  it("email should exist", () => {
    render(
          <MemoryRouter initialEntries={["/cadastro-usuario"]}>
            <NewUser />
          </MemoryRouter>
        );
    expect(screen.getByTestId('email')).toBeInTheDocument()
  })

  it("password should exist", () => {
    render(
          <MemoryRouter initialEntries={["/cadastro-usuario"]}>
            <NewUser />
          </MemoryRouter>
        );
    expect(screen.getByTestId('password')).toBeInTheDocument()
  })

  it("btnCancel should exist", () => {
    render(
          <MemoryRouter initialEntries={["/cadastro-usuario"]}>
            <NewUser />
          </MemoryRouter>
        );
    expect(screen.getByTestId('btnCancel')).toBeInTheDocument()
  })

  it("copyPassword should exist", () => {
    render(
          <MemoryRouter initialEntries={["/cadastro-usuario"]}>
            <NewUser />
          </MemoryRouter>
        );
    expect(screen.getByTestId('copyPassword')).toBeInTheDocument()
  })

  it("btnSubmit should exist", () => {
    render(
          <MemoryRouter initialEntries={["/cadastro-usuario"]}>
            <NewUser />
          </MemoryRouter>
        );
    expect(screen.getByTestId('btnSubmit')).toBeInTheDocument()
  })
})
 
 
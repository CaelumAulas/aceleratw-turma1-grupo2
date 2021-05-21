import { render, screen, fireEvent }  from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from "react-router-dom";

import NewBrand from '../../../components/organisms/NewBrand.jsx'

describe("NewBrand", () => {
  window.alert = jest.fn();
  test("test form", () => {
    render(
      <MemoryRouter initialEntries={["/cadastro-marca"]}>
        <NewBrand />
      </MemoryRouter>
    );
    const onSubmit = jest.fn();
    const { getByText } = render(<form onSubmit={onSubmit} />);
    fireEvent.click(getByText("Salvar"));
    expect(onSubmit).toBeDefined();
    window.alert.mockClear();
  });

  it("btnSave should exist", () => {
    render(
          <MemoryRouter initialEntries={["/cadastro-marca"]}>
            <NewBrand />
          </MemoryRouter>
        );
    expect(screen.getByTestId('brand')).toBeInTheDocument()
  })

  it("btnEdit should exist", () => {
    render(
          <MemoryRouter initialEntries={["/cadastro-marca"]}>
            <NewBrand />
          </MemoryRouter>
        );
    expect(screen.getByTestId('btnCancel')).toBeInTheDocument()
  })

  it("btnSave should exist", () => {
    render(
          <MemoryRouter initialEntries={["/cadastro-marca"]}>
            <NewBrand />
          </MemoryRouter>
        );
    expect(screen.getByTestId('btnSave')).toBeInTheDocument()
  })
})
 
 
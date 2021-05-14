import React from 'react'
import { render, screen }  from '@testing-library/react'
import NewBrand from '../../../components/molecules/NewBrand.jsx'
import { MemoryRouter } from "react-router-dom";

describe("NewBrand", () => {

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
 
 
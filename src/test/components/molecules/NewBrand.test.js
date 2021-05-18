import { render, screen }  from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from "react-router-dom";

import NewBrand from '../../../components/organisms/NewBrand.jsx'

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
 
 
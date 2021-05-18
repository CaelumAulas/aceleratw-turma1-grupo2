import React from 'react'
import NewBrand from '../../../pages/brands/NewBrand.js'
import { render, screen }  from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"

describe("Testing NewBrand Page", () => {

  describe("Testing if field and buttons exists", ()=>{
    it("Field brand should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-marca"]}>
          <NewBrand />
        </MemoryRouter>
      )
        expect(screen.getByTestId('brand')).toBeInTheDocument()
      })

      it("btnSave should exist", () => {
        render(
          <MemoryRouter initialEntries={["/cadastro-marca"]}>
            <NewBrand />
          </MemoryRouter>
        )
        expect(screen.getByTestId('btnSave')).toBeInTheDocument()
      })

      it("btnCancel should exist", () => {
        render(
          <MemoryRouter initialEntries={["/cadastro-marca"]}>
            <NewBrand />
          </MemoryRouter>
        )
        expect(screen.getByTestId('btnCancel')).toBeInTheDocument()
      })
    })
})
 
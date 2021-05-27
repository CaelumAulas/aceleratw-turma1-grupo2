import React from 'react'
import List from '../../../pages/brands/ListBrands.js'
import { MemoryRouter } from "react-router-dom"

import { render, screen }  from '@testing-library/react'
describe("List Brands Page Test", () => {

    describe("Testing if fields and buttons exists", () => {
      it("Button Delete should exist", () => {
        render(
        <MemoryRouter initialEntries={["/cadastro-marca"]}>
          <List />
        </MemoryRouter>
        )
        expect(screen.getByTestId('btnDelete')).toBeInTheDocument()
      })

      it("Button Edit should exist", () => {
        render(
        <MemoryRouter initialEntries={["/cadastro-marca"]}>
          <List />
        </MemoryRouter>
      )
        expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
      })
      
      it("Button new brand should exist", () => {
        render(
        <MemoryRouter initialEntries={["/cadastro-marca"]}>
          <List />
        </MemoryRouter>
      )
        expect(screen.getByTestId('btnNewBrand')).toBeInTheDocument()
      })

    })
})
 
 
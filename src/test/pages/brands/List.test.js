import React from 'react'
import List from '../../../pages/brands/ListBrands.js'

import { render, screen }  from '@testing-library/react'
describe("List Brands Page Test", () => {

    describe("Testing if fields and buttons exists", () => {
      it("Button Delete should exist", () => {
        render(<List />)
        expect(screen.getByTestId('btnDelete')).toBeInTheDocument()
      })

      it("Button Edit should exist", () => {
        render(<List />)
        expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
      })
      
      it("Button new brand should exist", () => {
        render(<List />)
        expect(screen.getByTestId('btnNewBrand')).toBeInTheDocument()
      })

    })
})
 
 
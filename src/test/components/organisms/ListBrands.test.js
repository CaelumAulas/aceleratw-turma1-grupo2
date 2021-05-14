import React from 'react'
import List from '../../../components/organisms/ListBrands.jsx'
import { render, screen }  from '@testing-library/react'
describe("ListBrands", () => {
 
  describe("Test if fields and buttons exists", () => {
    
    it("Button Edit should exist", () => {
      render(<List />)
      expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
    })
  
    it("Button delete should exist", () => {
      render(<List />)
      expect(screen.getByTestId('btnDelete')).toBeInTheDocument()
    })
    
    it("Button New Brand should exist", () => {
      render(<List />)
      expect(screen.getByTestId('btnNewBrand')).toBeInTheDocument()
    })
  })
})
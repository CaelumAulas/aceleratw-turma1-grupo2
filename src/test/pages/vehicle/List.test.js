import React from 'react'
import { render, screen }  from '@testing-library/react'
import List from '../../../pages/vehicle/List.js'

describe("List", () => {
  describe("Test if fields and exists", () => {
    
    it("Button Edit should exist", () => {
      render(<List />)
      expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
    })
  
    it("Button delete should exist", () => {
      render(<List />)
      expect(screen.getByTestId('btnDelete')).toBeInTheDocument()
    })
    
    it("Button New Vehicle should exist", () => {
      render(<List />)
      expect(screen.getByTestId('btnNewVehicle')).toBeInTheDocument()
    })
  })
  
})
 
 
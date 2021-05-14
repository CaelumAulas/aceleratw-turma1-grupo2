import React from 'react'
import { render, screen }  from '@testing-library/react'
import ListCars from '../../../components/organisms/ListCars.jsx'

describe("ListCars", () => {

  describe("Test if fields exists", () => {
    
    it("Button Edit should exist", () => {
      render(<ListCars />)
      expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
    })

    it("Button delete should exist", () => {
      render(<ListCars />)
      expect(screen.getByTestId('btnDelete')).toBeInTheDocument()
    })
    
    it("Button New Vehicle should exist", () => {
      render(<ListCars />)
      expect(screen.getByTestId('btnNewVehicle')).toBeInTheDocument()
    })
  })
})
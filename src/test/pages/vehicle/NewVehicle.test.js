import React from 'react'
import { render, screen }  from '@testing-library/react'
import NewVehicle from '../../../pages/vehicle/NewVehicle.js'

describe("Test Page NewVehicle", () => {

  describe("Testing if fields and buttons exists", () => {
    it("Select brand should exist", () => {
      render(<NewVehicle />)
      expect(screen.getByTestId('brand')).toBeInTheDocument()
    })

    it("Field Vehicle Model should exist", () => {
      render(<NewVehicle />)
      expect(screen.getByTestId('vehicleModel')).toBeInTheDocument()
    })

    it("Field year should exist", () => {
      render(<NewVehicle />)
      expect(screen.getByTestId('year')).toBeInTheDocument()
    })

    it("Field value should exist", () => {
      render(<NewVehicle />)
      expect(screen.getByTestId('value')).toBeInTheDocument()
    })

    it("Button Cancel should exist", () => {
      render(<NewVehicle />)
      expect(screen.getByTestId('btnCancel')).toBeInTheDocument()
    })

    it("Button Submit should exist", () => {
      render(<NewVehicle />)
      expect(screen.getByTestId('btnSubmit')).toBeInTheDocument()
    })

  })
})
 
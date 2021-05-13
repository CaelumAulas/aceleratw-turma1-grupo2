import React from 'react'
import { render, screen }  from '@testing-library/react'
import NewVehicle from '../../../pages/vehicle/NewVehicle.js'

describe("NewVehicle", () => {

  describe("Test if fields exists", () => {
    it("brand should exist", () => {
      render(<NewVehicle />);
      expect(screen.getByTestId('brand')).toBeInTheDocument();
    })

    it("vehicleModel should exist", () => {
      render(<NewVehicle />);
      expect(screen.getByTestId('vehicleModel')).toBeInTheDocument();
    })

    it("copyPassword should exist", () => {
      render(<NewVehicle />);
      expect(screen.getByTestId('year')).toBeInTheDocument();
    })

    it("value should exist", () => {
      render(<NewVehicle />);
      expect(screen.getByTestId('value')).toBeInTheDocument();
    })

    it("btnCancel should exist", () => {
      render(<NewVehicle />);
      expect(screen.getByTestId('btnCancel')).toBeInTheDocument();
    })

    it("btnSubmit should exist", () => {
      render(<NewVehicle />);
      expect(screen.getByTestId('btnSubmit')).toBeInTheDocument();
    })

    it("btnCancel should exist", () => {
      render(<NewVehicle />);
      expect(screen.getByTestId('btnCancel')).toBeInTheDocument();
    })
  })
})
 
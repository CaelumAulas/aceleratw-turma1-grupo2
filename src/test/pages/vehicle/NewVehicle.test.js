import React from 'react'
import { render, screen }  from '@testing-library/react'
import NewVehicle from '../../../components/organisms/NewVehicle.jsx'
import { MemoryRouter } from "react-router-dom"

describe("Test Page NewVehicle", () => {

  describe("Testing if fields and buttons exists", () => {
    it("Select brand should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-veiculo"]}>
          <NewVehicle />
        </MemoryRouter>
      )
      expect(screen.getByTestId('brand')).toBeInTheDocument()
    })

    it("Field Vehicle Model should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-veiculo"]}>
          <NewVehicle />
        </MemoryRouter>
      )
      expect(screen.getByTestId('vehicleModel')).toBeInTheDocument()
    })

    it("Field year should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-veiculo"]}>
          <NewVehicle />
        </MemoryRouter>
      )
      expect(screen.getByTestId('year')).toBeInTheDocument()
    })

    it("Field value should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-veiculo"]}>
          <NewVehicle />
        </MemoryRouter>
      )
      expect(screen.getByTestId('value')).toBeInTheDocument()
    })

    it("Button Cancel should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-veiculo"]}>
          <NewVehicle />
        </MemoryRouter>
      )
      expect(screen.getByTestId('btnCancel')).toBeInTheDocument()
    })

    it("Button Submit should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-veiculo"]}>
          <NewVehicle />
        </MemoryRouter>
      )
      expect(screen.getByTestId('btnSubmit')).toBeInTheDocument()
    })

  })
})
 
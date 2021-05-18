import React from 'react'
import { render, screen }  from '@testing-library/react'
import ListVehicle from '../../../components/organisms/ListVehicle.jsx'
import { MemoryRouter } from "react-router-dom"

describe("ListVehicle", () => {

  describe("Test if fields exists", () => {
    
    it("Button Edit should exist", () => {
        render(
          <MemoryRouter initialEntries={["/cadastro-marca"]}>
            <ListVehicle />
          </MemoryRouter>
        )
      expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
    })

    it("Button delete should exist", () => {
        render(
          <MemoryRouter initialEntries={["/cadastro-marca"]}>
            <ListVehicle />
          </MemoryRouter>
        )
      expect(screen.getByTestId('btnDelete')).toBeInTheDocument()
    })
    
    it("Button New Vehicle should exist", () => {
        render(
          <MemoryRouter initialEntries={["/cadastro-marca"]}>
            <ListVehicle />
          </MemoryRouter>
        )
      expect(screen.getByTestId('btnNewVehicle')).toBeInTheDocument()
    })
  })
})
import React from 'react'
import { render, screen }  from '@testing-library/react'
import ListVehicle from '../../../components/organisms/ListVehicle.jsx'
import { MemoryRouter } from "react-router-dom"

describe("ListVehicle", () => {

  describe("Test if fields exists", () => {
    it("dataGrid Edit should exist", () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <ListVehicle />
        </MemoryRouter>
      )
    expect(screen.getByTestId('dataGrid')).toBeInTheDocument()
  })
  })
})
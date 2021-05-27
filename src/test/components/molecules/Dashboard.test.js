import React from 'react'
import { render, screen }  from '@testing-library/react'
import Dashboard from '../../../components/molecules/Dashboard'
import { MemoryRouter } from "react-router-dom"

describe("Dashboard shoul exists", () => {

  describe("Testing if field and buttons exists", () => {
    it("DataGrid should exist", () => {
      render (
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Dashboard />
        </MemoryRouter>
      )
        expect(screen.getByTestId('dataGrid')).toBeInTheDocument()
      })
    })
})
 
 
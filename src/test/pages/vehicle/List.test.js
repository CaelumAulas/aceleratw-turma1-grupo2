import React from 'react'
import { render, screen }  from '@testing-library/react'
import List from '../../../pages/vehicle/List.js'
import { MemoryRouter } from "react-router-dom"

describe("List", () => {
  describe("Test if fields and exists", () => {
    
    it("Button Edit should exist", () => {
      render(
        <MemoryRouter initialEntries={["/"]}>
          <List />
        </MemoryRouter>
      )
      expect(screen.getByTestId('dataGrid')).toBeInTheDocument()
    })
  
  })
  
})
 
 
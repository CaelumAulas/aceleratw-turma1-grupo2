import React from 'react'
import List from '../../../pages/user/List.js'
import { render, screen }  from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"

describe("Test List Users Page", () => {

  describe("Testing if buttons and field exists", () => {
    it("Button Delete should exist", () => {
      render(
        <MemoryRouter initialEntries={["/listar-usuarios"]}>
          <List />
        </MemoryRouter>
      )
      expect(screen.getByTestId('btnDelete')).toBeInTheDocument()
    })

    it("Button Edit should exist", () => {
      render(
        <MemoryRouter initialEntries={["/listar-usuarios"]}>
          <List />
        </MemoryRouter>
      )
      expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
    })
    
    it("Button new User should exist", () => {
      render(
        <MemoryRouter initialEntries={["/listar-usuarios"]}>
          <List />
        </MemoryRouter>
      )
      expect(screen.getByTestId('btnNewUser')).toBeInTheDocument()
    })

    it("Button Edit should exist", () => {
      render(
        <MemoryRouter initialEntries={["/listar-usuarios"]}>
          <List />
        </MemoryRouter>
      )
      expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
    })
  })
})
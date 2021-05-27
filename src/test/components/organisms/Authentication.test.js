import React from 'react'
import Authentication from '../../../components/organisms/Authentication.jsx'
import { render, screen }  from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"

describe("Authentication", () => {
 
  describe("Test if fields exists", () => {
    it("email should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-marca"]}>
          <Authentication />
        </MemoryRouter>
        )
      expect(screen.getByTestId('email')).toBeInTheDocument()
    })

    it("password should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-marca"]}>
          <Authentication />
        </MemoryRouter>
        )
      expect(screen.getByTestId('password')).toBeInTheDocument()
    })

    it("btnClick should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-marca"]}>
          <Authentication />
        </MemoryRouter>
        )
      expect(screen.getByTestId('btnClick')).toBeInTheDocument()
    })
  })
})
 
 
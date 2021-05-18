import React from 'react'
import { render, screen }  from '@testing-library/react'
import NewUser from '../../../pages/user/NewUser.js'
import { MemoryRouter } from "react-router-dom"

describe("Testing NewUser Component", () => {

  describe("Test if fields and buttons exists", () => {
    it("user should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-usuario"]}>
          <NewUser />
        </MemoryRouter>
      )
      expect(screen.getByTestId('user')).toBeInTheDocument()
    })

    it("password should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-usuario"]}>
          <NewUser />
        </MemoryRouter>
      )
      expect(screen.getByTestId('password')).toBeInTheDocument()
    })

    it("copyPassword should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-usuario"]}>
          <NewUser />
        </MemoryRouter>
      )
      expect(screen.getByTestId('copyPassword')).toBeInTheDocument()
    })

    it("btnSubmit should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-usuario"]}>
          <NewUser />
        </MemoryRouter>
      )
      expect(screen.getByTestId('btnSubmit')).toBeInTheDocument()
    })

    it("btnCancel should exist", () => {
      render(
        <MemoryRouter initialEntries={["/cadastro-usuario"]}>
          <NewUser />
        </MemoryRouter>
      )
      expect(screen.getByTestId('btnCancel')).toBeInTheDocument()
    })
  })
  
})
 
 
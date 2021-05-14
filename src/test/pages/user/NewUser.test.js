import React from 'react'
import { render, screen }  from '@testing-library/react'
import NewUser from '../../../pages/user/NewUser.js'

describe("Testing NewUser Component", () => {

  describe("Test if fields and buttons exists", () => {
    it("user should exist", () => {
      render(<NewUser />)
      expect(screen.getByTestId('user')).toBeInTheDocument()
    })

    it("password should exist", () => {
      render(<NewUser />)
      expect(screen.getByTestId('password')).toBeInTheDocument()
    })

    it("copyPassword should exist", () => {
      render(<NewUser />)
      expect(screen.getByTestId('copyPassword')).toBeInTheDocument()
    })

    it("btnSubmit should exist", () => {
      render(<NewUser />)
      expect(screen.getByTestId('btnSubmit')).toBeInTheDocument()
    })

    it("btnCancel should exist", () => {
      render(<NewUser />)
      expect(screen.getByTestId('btnCancel')).toBeInTheDocument()
    })
  })
  
})
 
 
import React from 'react'
import Authentication from '../../../components/organisms/Authentication.jsx'
import { render, screen }  from '@testing-library/react'
describe("Authentication", () => {
 
  describe("Test if fields exists", () => {
    it("email should exist", () => {
      render(<Authentication />)
      expect(screen.getByTestId('email')).toBeInTheDocument()
    })

    it("password should exist", () => {
      render(<Authentication />)
      expect(screen.getByTestId('password')).toBeInTheDocument()
    })

    it("btnClick should exist", () => {
      render(<Authentication />)
      expect(screen.getByTestId('btnClick')).toBeInTheDocument()
    })
  })
})
 
 
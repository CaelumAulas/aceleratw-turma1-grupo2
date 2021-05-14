import React from 'react'
import { render, screen }  from '@testing-library/react'
import Authentication from '../../../pages/authentication/Authentication.js'

describe("Testing Authentication Component", () => {

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
 
 
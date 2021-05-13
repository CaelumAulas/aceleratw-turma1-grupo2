import React from 'react'
import EditUserPassword from '../../../pages/user/EditUserPassword.js'
import { render, screen }  from '@testing-library/react'

describe("EditUserPassword", () => { 

  describe("Testing if field and buttons exists", ()=>{
    it("Field old password exist", () => {
      render(<EditUserPassword />)
      expect(screen.getByTestId('oldPassword')).toBeInTheDocument()
    })

    it("Button New password exist", () => {
      render(<EditUserPassword />)
      expect(screen.getByTestId('newPassword')).toBeInTheDocument()
    })

    it("Button Confirm password should exist", () => {
      render(<EditUserPassword />)
      expect(screen.getByTestId('confirmPassword')).toBeInTheDocument()
    })

    it("Button save should exist", () => {
      render(<EditUserPassword />)
      expect(screen.getByTestId('btnSave')).toBeInTheDocument()
    })
    
    it("Button cancel should exist", () => {
      render(<EditUserPassword />)
      expect(screen.getByTestId('btnCancel')).toBeInTheDocument()
    })
  })
})
 
 
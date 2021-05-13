import React from 'react'
import List from '../../../pages/user/List.js'
import { render, screen }  from '@testing-library/react'

describe("Test List Users Page", () => {

  describe("Testing if buttons and field exists", () => {
    it("Button Delete should exist", () => {
      render(<List />)
      expect(screen.getByTestId('btnDelete')).toBeInTheDocument()
    })

    it("Button Edit should exist", () => {
      render(<List />)
      expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
    })
    
    it("Button new User should exist", () => {
      render(<List />)
      expect(screen.getByTestId('btnNewUser')).toBeInTheDocument()
    })

    it("Button Edit should exist", () => {
      render(<List />)
      expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
    })
  })
})
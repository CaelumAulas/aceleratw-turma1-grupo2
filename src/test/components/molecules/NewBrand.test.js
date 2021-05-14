import React from 'react'
import { render, screen }  from '@testing-library/react'
import NewBrand from '../../../components/molecules/NewBrand.jsx'
describe("NewBrand", () => {

  it("btnSave should exist", () => {
    render(<NewBrand />)
    expect(screen.getByTestId('brand')).toBeInTheDocument()
  })

  it("btnEdit should exist", () => {
    render(<NewBrand />)
    expect(screen.getByTestId('btnCancel')).toBeInTheDocument()
  })

  it("btnSave should exist", () => {
    render(<NewBrand />)
    expect(screen.getByTestId('btnSave')).toBeInTheDocument()
  })
})
 
 
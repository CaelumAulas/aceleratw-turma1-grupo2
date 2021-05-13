import React from 'react'
import Header from '../../../components/molecules/Header.jsx'
import { render, screen }  from '@testing-library/react'
describe("Header", () => {

  describe("Tests", ()=>{
    describe("Test if links exists", ()=>{
      it("Link List Vehicle link exist", () => {
        render(<Header />)
        expect(screen.getByTestId('linkListVehicle')).toBeInTheDocument()
      })
      
      it("Link Admin Acess link exist", () => {
        render(<Header />)
        expect(screen.getByTestId('linkAdminAccess')).toBeInTheDocument()
      }) 
      it("Link List Vehicle link exist", () => {
        render(<Header />)
        expect(screen.getByTestId('linkListVehicle')).toBeInTheDocument()
      }) 
      it("Button arrow exist", () => {
        render(<Header />)
        expect(screen.getByTestId('btnHeaderArrowIcon')).toBeInTheDocument()
      })
      it("Button arrow exist", () => {
        render(<Header />)
        expect(screen.getByTestId('linkAdminAccess')).toBeInTheDocument()
      })
      it("Button arrow exist", () => {
        render(<Header />)
        expect(screen.getByTestId('linkListBrands')).toBeInTheDocument()
      })
      it("Button arrow exist", () => {
        render(<Header />)
        expect(screen.getByTestId('linkDashboard')).toBeInTheDocument()
      })
      it("Button arrow exist", () => {
        render(<Header />)
        expect(screen.getByTestId('linkEditPassword')).toBeInTheDocument()
      }) 
    })
  })
})
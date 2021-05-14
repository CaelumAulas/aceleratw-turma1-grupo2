import { render, screen }  from '@testing-library/react'
import React from 'react'

import Header from '../../../components/molecules/Header.jsx'

describe("Header", () => {

  describe("Tests", ()=>{
    describe("Test if links exists", ()=>{
     
      
      it("Button Add New Vehicle", () => {
        render(<Header />)
        expect(screen.getByTestId('btnNewVehicle')).toBeInTheDocument()
      })

      it("Button delete exist", () => {
        render(<Header />)
        expect(screen.getByTestId('btnDelete')).toBeInTheDocument()
      })

      it("Button edit exist", () => {
        render(<Header />)
        expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
      })

     /* it("Button arrow exist", () => {
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
      }) */
    })
  })
})
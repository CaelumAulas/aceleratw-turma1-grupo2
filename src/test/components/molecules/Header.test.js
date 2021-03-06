import React from 'react'
import Header from '../../../components/molecules/Header.jsx'
import { render, screen }  from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {

  describe("Tests", ()=>{
    describe("Test if links exists", ()=>{
      
      it("Link Admin Acess link exist", () => {
         render(
          <MemoryRouter initialEntries={["/"]}>
            <Header />
          </MemoryRouter>
        );
        expect(screen.getByTestId('linkAdminAccess')).toBeInTheDocument()
      }) 
      it("Link List Vehicle link exist", () => {
         render(
          <MemoryRouter initialEntries={["/"]}>
            <Header />
          </MemoryRouter>
        );
        expect(screen.getByTestId('linkListVehicle')).toBeInTheDocument()
      }) 
      it("Button arrow exist", () => {
         render(
          <MemoryRouter initialEntries={["/"]}>
            <Header />
          </MemoryRouter>
        );
        expect(screen.getByTestId('btnHeaderArrowIcon')).toBeInTheDocument()
      })
     
      it("Button arrow exist", () => {
         render(
          <MemoryRouter initialEntries={["/"]}>
            <Header />
          </MemoryRouter>
        );
        expect(screen.getByTestId('btnIcon')).toBeInTheDocument()
      })
      it("Button arrow exist", () => {
         render(
          <MemoryRouter initialEntries={["/"]}>
            <Header />
          </MemoryRouter>
        );
        expect(screen.getByTestId('headerDrawer')).toBeInTheDocument()
      })
    })
  })
})
import React from 'react'
import List from '../../../components/organisms/ListBrands.jsx'
import { render, screen }  from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";

describe("ListBrands", () => {
 
  describe("Test if fields and buttons exists", () => {
    
    it("Button Edit should exist", () => {
      render(
          <MemoryRouter initialEntries={["/listar-marca"]}>
            <List />
          </MemoryRouter>
        );
      expect(screen.getByTestId('btnEdit')).toBeInTheDocument()
    })
  
    it("Button delete should exist", () => {
      render(
          <MemoryRouter initialEntries={["/listar-marca"]}>
            <List />
          </MemoryRouter>
        );
      expect(screen.getByTestId('btnDelete')).toBeInTheDocument()
    })
    
    it("Button New Brand should exist", () => {
      render(
          <MemoryRouter initialEntries={["/listar-marca"]}>
            <List />
          </MemoryRouter>
        );
      expect(screen.getByTestId('btnNewBrand')).toBeInTheDocument()
    })
  })
})
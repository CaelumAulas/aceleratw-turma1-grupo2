import React from 'react';
import List from '../../../pages/brands/ListBrands.js';

import { render, screen }  from '@testing-library/react'
describe("NewBrand", () => {

    describe("Testing if the buttons exists", () => {
      it("lbtnDelete should exist", () => {
        render(<List />);
        expect(screen.getByTestId('btnDelete')).toBeInTheDocument();
      })

      it("btnEdit should exist", () => {
        render(<List />);
        expect(screen.getByTestId('btnEdit')).toBeInTheDocument();
      })
      
      it("btnNew should exist", () => {
        render(<List />);
        expect(screen.getByTestId('btnNew')).toBeInTheDocument();
      })

    })
})
 
 
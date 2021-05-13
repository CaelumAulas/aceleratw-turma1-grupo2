import React from 'react';
import NewBrand from '../../../pages/brands/NewBrand.js';
import { render, screen }  from '@testing-library/react'
describe("NewBrand", () => {
    it("brand should exist", () => {
        render(<NewBrand />);
        expect(screen.getByTestId('brand')).toBeInTheDocument();
      })

      it("btnSave should exist", () => {
        render(<NewBrand />);
        expect(screen.getByTestId('btnSave')).toBeInTheDocument();
      })

      it("btnCancel should exist", () => {
        render(<NewBrand />);
        expect(screen.getByTestId('btnCancel')).toBeInTheDocument();
      })
});
 
 
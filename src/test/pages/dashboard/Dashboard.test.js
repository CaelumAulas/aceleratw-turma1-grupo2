import React from 'react';
import { render, screen }  from '@testing-library/react'
import Dashboard from '../../../pages/dashboard/Dashboard.js';

describe("Dashboard shoul exists", () => {
    it("data-grid should exist", () => {
        render(<Dashboard />);
        expect(screen.getByTestId('data-grid')).toBeInTheDocument();
      })
});
 
 
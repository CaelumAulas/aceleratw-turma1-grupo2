import React from 'react';
import List from '../../../pages/user/List.js';
import { render, screen }  from '@testing-library/react'

describe("List", () => {
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
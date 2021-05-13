import React from 'react'
import { render, screen }  from '@testing-library/react'
import List from '../../../pages/vehicle/List.js'
//import ListCars from "../../../components/organisms/ListCars";

describe("List", () => {
  it("delete button should exist", () => {
    render(<List />);
    expect(screen.getByTestId('delete')).toBeInTheDocument();
  })

  it("edit button should exist", () => {
    render(<List />);
    expect(screen.getByTestId('edit')).toBeInTheDocument();
  })

  it("new button should exist", () => {
    render(<List />);
    expect(screen.getByTestId('new')).toBeInTheDocument();
  })
  
})
 
 
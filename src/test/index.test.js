import App from "../App"
import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
/* istanbul ignore next */ 
describe("Test if fields exists", () => {

  it("Called", () => {
    render(
      <App />
    );
    expect(screen.getByTestId('btnIcon')).toBeInTheDocument()
  })

})





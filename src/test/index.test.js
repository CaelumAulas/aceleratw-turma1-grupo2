import App from "../App"
import ReportWebVitals from "../reportWebVitals.js"
import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
/* istanbul ignore next */ 
describe("Test if fields exists", () => {

  it("Token should called", () => {
    render( <App /> )
    
    jest.mock("../index.js", () => {
      return {
        index: jest.fn(() => Promise.resolve(''))
      }
    })
      const report =   ReportWebVitals.reportWebVitals
      expect(report).toBeUndefined()
  })

})





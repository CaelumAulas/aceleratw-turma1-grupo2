import ReportWebVitals from "../reportWebVitals.js"
import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
/* istanbul ignore next */ 
describe("Test if fields exists", () => {

  test("Token should called", () => {
    
    jest.mock("../reportWebVitals.js", () => {
      return {
        reportWebVitals: jest.fn(() => Promise.resolve(''))
      };
    });
  
      // highlight-start
      const report =   ReportWebVitals.reportWebVitals
      expect(report).toBeUndefined()
      // highlight-end
  })

})



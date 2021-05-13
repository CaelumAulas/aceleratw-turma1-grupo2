import React from 'react'
import { render, screen }  from '@testing-library/react'
import Dashboard from '../../../pages/dashboard/Dashboard.js'

describe("Dashboard shoul exists", () => {

  describe("Testing if field and buttons exists", ()=>{
    it("DataGrid should exist", () => {
        render(<Dashboard />)
        expect(screen.getByTestId('dataGrid')).toBeInTheDocument()
      })
    })
})
 
 
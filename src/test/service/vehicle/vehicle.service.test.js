import List from '../../../pages/vehicle/List'
import React from 'react'
import { render, screen }  from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import VehicleService from '../../../service/vehicle/vehicle.service'

describe("Vehicle List Service Test", () => {

  it("Should be fetch list Vehicle", () => {
    render( 
      <MemoryRouter initialEntries={["/listar-veiculos"]}>
        <List />
      </MemoryRouter>
    )
    // highlight-start
    expect(VehicleService.getVehicles()).toBeTruthy();
    // highlight-end
  })
})

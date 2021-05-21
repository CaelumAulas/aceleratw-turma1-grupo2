import { render, screen }  from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import List from '../../../pages/vehicle/List'
import VehicleService from '../../../service/vehicle/vehicle.service'

describe( 'Vehicle List Service Test' , () => {

  const mockResponseSucess = {
     content : [
        {
             id : 2,
             marca : {
                 id : 1,
                 descricao :  'FORD'
            },
             valor : 123.20,
             modelo :  'Ford KA' ,
             ano : 2014
        },
        {
             id : 1,
             marca : {
                 id : 1,
                 descricao :  'FORD' 
            },
             valor : 123.20,
             modelo :  'Ford KA' ,
             ano : 2012
        }
    ],
     pageable : {
         sort : {
             sorted : true,
             unsorted : false,
             empty : false
        },
         pageNumber : 0,
         pageSize : 10,
         offset : 0,
         paged : true,
         unpaged : false
    },
     last : true,
     totalElements : 2,
     totalPages : 1,
     numberOfElements : 2,
     number : 0,
     first : true,
     size : 10,
     sort : {
         sorted : true,
         unsorted : false,
         empty : false
    },
    empty: false
}
it( 'Should be fetch list Vehicle' , () => {
  render( 
    <MemoryRouter initialEntries={[ '/listar-veiculos' ]}>
      <List />
    </MemoryRouter>
  )
  expect(VehicleService.getVehicles()).toBeTruthy();
})

  it( 'Should be fetch deleteVehicle' , () => {
    render( 
      <MemoryRouter initialEntries={[ '/listar-veiculos' ]}>
        <List />
      </MemoryRouter>
    )
    expect(VehicleService.deleteVehicle()).toBeTruthy();
  })

  it( 'Should be fetch getVehiclesById' , () => {
    render( 
      <MemoryRouter initialEntries={[ '/listar-veiculos' ]}>
        <List />
      </MemoryRouter>
    )
    expect(VehicleService.getVehiclesById()).toBeTruthy();
  })
  
  it( 'Should be fetch updateVehicle' , () => {
    render( 
      <MemoryRouter initialEntries={[ '/listar-veiculos' ]}>
        <List />
      </MemoryRouter>
    )
    const vehicle = {id:1}
    expect(VehicleService.updateVehicle(vehicle)).toBeUndefined();
  })
})

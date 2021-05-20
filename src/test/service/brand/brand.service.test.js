import List from '../../../pages/brands/ListBrands.js'
import React from 'react'
import { render, screen }  from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import BrandService from '../../../service/brand/brand.service'

describe("Brand List Service Test", () => {

  it("Should be fetch list Brand", () => {
    render( 
      <MemoryRouter initialEntries={["/listar-marcas"]}>
        <List />
      </MemoryRouter>
    )
    // highlight-start
    expect(BrandService.getBrands()).toBeTruthy();
    //expect(AuthService.login()).toHaveBeenCalledWith();
    // highlight-end
  })
})

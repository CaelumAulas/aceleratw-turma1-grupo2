import List from '../../../pages/brands/ListBrands.js'
import React from 'react'
import { render, screen }  from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import BrandService from '../../../service/brand/brand.service'

describe("Brand List Service Test", () => {
  window.alert = jest.fn();
  it("Should be fetch list Brand", () => {
    render( 
      <MemoryRouter initialEntries={["/listar-marcas"]}>
        <List />
      </MemoryRouter>
    )
    expect(BrandService.getBrands()).toBeTruthy();
  })

  it("Brands should called", () => {
      const mockGetToken = jest.spyOn(BrandService, 'getBrands');
      mockGetToken.mockRejectedValue(new Error('Error'))
      window.alert.mockClear();
})

it( 'Should be fetch list Brand' , () => {
  render( 
    <MemoryRouter initialEntries={[ '/listar-marcas' ]}>
      <List />
    </MemoryRouter>
  )
  expect(BrandService.getBrands()).toBeUndefined()
})

  it( 'Should be fetch deleteBrand' , () => {
    render( 
      <MemoryRouter initialEntries={[ '/listar-marcas' ]}>
        <List />
      </MemoryRouter>
    )
    expect(BrandService.deleteBrand()).toBeTruthy();
  })

  it( 'Should be fetch getBrandsById' , () => {
    render( 
      <MemoryRouter initialEntries={[ '/listar-marcas' ]}>
        <List />
      </MemoryRouter>
    )
    expect(BrandService.getBrandsById()).toBeTruthy();
  })
  
  it( 'Should be fetch updateBrand' , () => {
    render( 
      <MemoryRouter initialEntries={[ '/listar-marcas' ]}>
        <List />
      </MemoryRouter>
    )
    const brand = {id:1}
    expect(BrandService.updateBrand(brand)).toBeUndefined();
  })
})

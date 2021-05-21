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
    // highlight-start
    expect(BrandService.getBrands()).toBeTruthy();
    //expect(AuthService.login()).toHaveBeenCalledWith();
    // highlight-end
  })

  it("Brands should called", () => {
   /* jest.mock("../../../service/brand/brand.service", () => {
        return {
          getBrands: jest.fn(() => Promise.resolve())
        };
    });*/
      const mockGetToken = jest.spyOn(BrandService, 'getBrands');
      mockGetToken.mockRejectedValue(new Error('Error'))
      window.alert.mockClear();
})
})

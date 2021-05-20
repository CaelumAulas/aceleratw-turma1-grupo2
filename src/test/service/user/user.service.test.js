import List from '../../../pages/user/List'
import React from 'react'
import { render, screen }  from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import UserService from '../../../service/user/user.service'

describe("Vehicle List Service Test", () => {

  it("Should be fetch list Vehicle", () => {
    render( 
      <MemoryRouter initialEntries={["/listar-veiculos"]}>
        <List />
      </MemoryRouter>
    )
    // highlight-start
    expect(UserService.getUsers()).toBeTruthy();
    // highlight-end
  })
})

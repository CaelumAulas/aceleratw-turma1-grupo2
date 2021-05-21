import { render, screen }  from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from "react-router-dom"

import List from '../../../pages/user/List'
import UserService from '../../../service/user/user.service'

describe("Vehicle List Service Test", () => {
  window.alert = jest.fn();

  it("Should be fetch list Vehicle", () => {
    render( 
      <MemoryRouter initialEntries={["/listar-usuarios"]}>
        <List />
      </MemoryRouter>
    )
    // highlight-start
    expect(UserService.getUsers()).toBeTruthy();
    // highlight-end
  }) 
  ,
  

  it("Should be fetch getUsersById", () => {
    render( 
      <MemoryRouter initialEntries={["/listar-usuarios"]}>
        <List />
      </MemoryRouter>
    )
    // highlight-start
    expect(UserService.getUsersById()).toBeTruthy();
    // highlight-end
  }) 

  it("Should updateUser", () => {
    window.alert = jest.fn();
    render( 
      <MemoryRouter initialEntries={["/listar-usuarios"]}>
        <List />
      </MemoryRouter>
    )
    expect(UserService.updateUser({id:1})).toBeUndefined();
    window.alert.mockClear();
    // highlight-end
  }) 


  it("Should deleteUser", () => {
    render( 
      <MemoryRouter initialEntries={["/listar-usuarios"]}>
        <List />
      </MemoryRouter>
    )
    // highlight-start
    expect(UserService.deleteUser()).toBeTruthy();
    // highlight-end
  })
})

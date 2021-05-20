import Authentication from '../../../pages/authentication/Authentication.js'
import React from 'react'
import { MemoryRouter } from "react-router-dom"
import AuthService from '../../../service/auth/auth.service'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe("Test if fields exists", () => {
 
  const mockRetornoToken = {
        jwtAuthenticationResponse: {
          accessToken: "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgZG8gQ2FyYW5nb0JvbSIsInN1YiI6IjIiLCJpYXQiOjE2MjE1MTExOTEsImV4cCI6MTYyMTU5NzU5MX0.gByMCREREpk50m4xmBofcSqloAlwBtI707tlbNyVGFM",
          tokenType: "Bearer"
        }
  }

  const mockError = {
    email: '', senha:''
  }

  const mock = {
    email: 'gisele@email', senha:'123456'
  }

  let originalFetch;

  it("Token should called", () => {
    render( 
      <MemoryRouter initialEntries={["/acesso"]}>
        <Authentication />
      </MemoryRouter>
    )
    
    jest.mock("../../../service/auth/auth.service", () => {
      const mockPromisse = { email: 'gisele@email', senha:'123456' }
      return {
        login: jest.fn(() => Promise.resolve(mockPromisse.email, mockPromisse.senha))
      };
    });
  
      const mockGetToken = jest.spyOn(AuthService, 'login');
      mockGetToken.mockResolvedValue(mock.email, mock.senha);
      mockGetToken.mockReturnValue(mockRetornoToken.jwtAuthenticationResponse.accessToken)
   
      // highlight-start
      const login =   AuthService.login(mock.email, mock.senha);
      expect(login).toBeTruthy();
      // highlight-end
  })

  it("Token should called", () => {
    render( 
      <MemoryRouter initialEntries={["/acesso"]}>
        <Authentication />
      </MemoryRouter>
    )
    
    jest.mock("../../../service/auth/auth.service", () => {
      const mockPromisse = { email: 'gisele@email', senha:'123456' }
      return {
        login: jest.fn(() => Promise.resolve(mockPromisse.email, mockPromisse.senha))
      };
    });
  
      const mockGetToken = jest.spyOn(AuthService, 'login');
      mockGetToken.mockResolvedValue(mock.email, mock.senha);
      mockGetToken.mockReturnValue(mockRetornoToken.jwtAuthenticationResponse.accessToken)
   
      // highlight-start
      const login =   AuthService.login(mock.email, mock.senha);
      expect(login).toBe(mockRetornoToken.jwtAuthenticationResponse.accessToken);
      // highlight-end
  })

  it("Token should called", () => {
      jest.mock("../../../service/auth/auth.service", () => {
        const mockPromisse = { email: '', senha:'' }
          return {
            login: jest.fn(() => Promise.resolve(mockPromisse.email, mockPromisse.senha))
          };
      });
        const mockGetToken = jest.spyOn(AuthService, 'login');
        mockGetToken.mockResolvedValue(mockError.email, mockError.senha);
        mockGetToken.mockRejectedValue(new Error('Error'))
      // highlight-start
      const login =   AuthService.login(mockError.email, mockError.senha);
      // highlight-end
  })
})

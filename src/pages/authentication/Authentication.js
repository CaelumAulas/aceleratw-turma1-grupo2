import React from 'react'
import Authentication from "../../components/organisms/Authentication"

export default function Checkout() {
  return (
    <React.Fragment>
      <Authentication id="authenticationPage" data-testid="authenticationPage" />
    </React.Fragment>
  )
}
import React from 'react';
import Authentication from "../../components/organisms/Authentication";

export default function Checkout() {
  return (
    <React.Fragment>
      <Authentication id="authentication-page" data-testid="authentication-page" />
    </React.Fragment>
  );
}
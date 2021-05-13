import React from 'react';
import ListBrands from "../../components/organisms/ListBrands.jsx";

export default function Checkout() {
  return (
    <React.Fragment>
      <ListBrands id="list-brands-page" data-testid="list-brands-page"/>
    </React.Fragment>
  );
}
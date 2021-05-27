import React from 'react'
import ListBrands from "../../components/organisms/ListBrands.jsx"

export default function Checkout() {
  return (
    <React.Fragment>
      <ListBrands id="listBrandsPage" data-testid="listBrandsPage"/>
    </React.Fragment>
  )
}
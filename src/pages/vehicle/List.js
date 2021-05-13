import React from 'react'
import ListCars from "../../components/organisms/ListCars.jsx"

export default function Checkout() {
  return (
    <React.Fragment>
      <ListCars id="listCarsPage" data-testid="listCarsPage" />
    </React.Fragment>
  )
}
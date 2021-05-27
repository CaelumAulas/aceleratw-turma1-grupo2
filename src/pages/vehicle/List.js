import React from 'react'
import ListVehicle from "../../components/organisms/ListVehicle.jsx"

export default function Checkout() {
  return (
    <React.Fragment>
      <ListVehicle id="listCarsPage" data-testid="listCarsPage" />
    </React.Fragment>
  )
}
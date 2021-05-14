import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Header from "./components/molecules/Header.jsx"
import Authentication from "./pages/authentication/Authentication.js"
import ListBrands from "./pages/brands/ListBrands.js"
import NewBrand from "./pages/brands/NewBrand.js"
import Dashboard from "./pages/dashboard/Dashboard.js"
import EditPassword from "./pages/user/EditUserPassword.js"
import ListUsers from "./pages/user/List.js"
import NewUser from "./pages/user/NewUser.js"
import ListOfCars from "./pages/vehicle/List.js"
import NewVehicle from "./pages/vehicle/NewVehicle.js"

function App() {
  return (
      <Router>
        <div className="App">
        <Header />
        </div>
      </Router>
)
}

export default App

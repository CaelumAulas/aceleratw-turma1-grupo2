import { Redirect } from "react-router-dom";
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
  const isAuthenticated = localStorage.getItem('token')
  return (
    <Router>
      <div className="App">
        <Header data-testid="header" />
      </div>
      <Switch>
        <Route path="/" exact>
          <ListOfCars />
        </Route>
        <Route path="/login">
          <Authentication />
        </Route>
        <Route path="/cadastro-usuario">
          <NewUser />
        </Route>
        <PrivateRoute authenticated={isAuthenticated} component={ListBrands} path="/listar-marcas" />
        <PrivateRoute authenticated={isAuthenticated} component={NewBrand} path="/cadastro-marca" />
        <PrivateRoute authenticated={isAuthenticated} component={NewBrand} path="/cadastro-marca/:id" />
        <PrivateRoute authenticated={isAuthenticated} component={NewVehicle} path="/cadastro-veiculo" />
        <PrivateRoute authenticated={isAuthenticated} component={ListUsers} path="/listar-usuarios" />
        <PrivateRoute authenticated={isAuthenticated} component={Dashboard} path="/dashboard" />
      </Switch>
    </Router>
  )
}

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  const isAuthenticated = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login' }} />}
    />
  )
}

export default App

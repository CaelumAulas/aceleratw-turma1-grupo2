import Header from "./components/molecules/Header.jsx"
import Authentication from "./pages/authentication/Authentication.js"
import ListOfCars from "./pages/vehicle/List.js"
import NewUser from "./pages/user/NewUser.js"
import ListUsers from "./pages/user/List.js"
import NewVehicle from "./pages/vehicle/NewVehicle.js"
import ListBrands from "./pages/brands/ListBrands.js"
import EditPassword from "./pages/user/EditUserPassword.js"
import Dashboard from "./pages/dashboard/Dashboard.js"
import NewBrand from "./pages/brands/NewBrand.js"
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


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
        <PrivateRoute authenticated={isAuthenticated} component={EditPassword} path="/editar-senha" />
        <PrivateRoute authenticated={isAuthenticated} component={Dashboard} path="/dashboard" />
      </Switch>
    </Router>
  )
}

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  console.log('authenticated', { component: Component, authenticated, ...rest })
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login' }} />}
    />
  )
}

export default App

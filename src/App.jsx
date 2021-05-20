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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Header data-testid="header" />
      </div>
      <Switch>
        <Route path="/" exact>
          <ListOfCars />
        </Route>
        <Route path="/acesso">
          <Authentication />
        </Route>
        <Route path="/cadastro-usuario">
          <NewUser />
        </Route>
        <Route path="/listar-marcas">
          <ListBrands />
        </Route>
        <Route path="/cadastro-marca">
          <NewBrand />
        </Route>
        <Route path="/cadastro-marca/:id">
          <NewBrand />
        </Route>
        <Route path="/cadastro-veiculo">
          <NewVehicle />
        </Route>
        <Route path="/listar-usuarios">
          <ListUsers />
        </Route>
        <Route path="/editar-senha">
          <EditPassword />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

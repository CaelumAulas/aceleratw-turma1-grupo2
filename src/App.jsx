import Header from "./components/molecules/Header.jsx"
import Authentication from "./pages/authentication/Authentication.js"
import ListOfCars from "./pages/cars/List.js"
import NewUser from "./pages/newUser/NewUser.js"
import ListUsers from "./pages/listUsers/ListUsers.js"
import NewVehicle from "./pages/NewVehicle/NewVehicle.js"
import ListBrands from "./pages/brands/ListBrands.js"
import EditPassword from "./pages/newUser/EditPassword.js"
import Dashboard from "./pages/dashboard/Dashboard.js"
import NewBrand from "./pages/brands/NewBrand.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
      <Router>
        <div className="App">
        <Header />
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
            <Route path="/list-brands">
              <ListBrands />
            </Route>
            <Route path="/new-brand">
              <NewBrand />
            </Route>
            <Route path="/cadastro-veiculo">
              <NewVehicle />
            </Route>
            <Route path="/usuarios">
              <ListUsers />
            </Route>
            <Route path="/edit-password">
              <EditPassword />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
      </Router>
);
}

export default App;

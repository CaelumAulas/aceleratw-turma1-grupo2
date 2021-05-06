import Header from "./components/molecules/Header.jsx"
import Authentication from "./pages/authentication/Authentication.js"
import ListOfCars from "./pages/cars/List.js"
import ListBrands from "./pages/brands/ListBrands.js"
import NewUser from "./pages/newUser/NewUser.js"
import NewBrand from "./pages/brands/NewBrand.js"
import NewVehicle from "./pages/NewVehicle/NewVehicle.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
          </Switch>
      </Router>
);
}

export default App;

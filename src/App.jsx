import Header from "./components/organisms/Header.js"
import Authentication from "./pages/authentication/Authentication.js"
import ListOfCars from "./pages/cars/List.js"
import NewUser from "./pages/newUser/NewUser.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className="App">
        <Header />
        </div>
          <Switch>
            <Route path="/">
              <ListOfCars />
            </Route>
            <Route path="/login">
              <Authentication />
            </Route>
            <Route path="/cadastro-usuario">
              <NewUser />
            </Route>
          </Switch>
      </Router>
);
}

export default App;

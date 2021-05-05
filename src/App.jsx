import Header from "./components/organisms/Header.js"
import Authentication from "./pages/authentication/Authentication.js"
import ListOfCars from "./pages/cars/List.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className="App">
        <Header />
        </div>
          <Switch>
            <Route path="/login">
              <Authentication />
            </Route>
            <Route path="/">
              <ListOfCars />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;

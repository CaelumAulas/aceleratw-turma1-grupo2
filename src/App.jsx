import Authentication from "./pages/authentication/Authentication.js"
import ListOfCars from "./pages/cars/List.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
        <Router>
            <Switch>
              <Route path='/login' component={ Authentication } />
              <Route path='/' component={ ListOfCars } exact />
            </Switch>
        </Router>
  );
}

export default App;

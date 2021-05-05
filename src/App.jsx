import Authentication from "./pages/authentication/Authentication.js"
import NewUser from "./pages/newUser/NewUser.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
        <Router>
            <Switch>
                <Route path='/login' component={ Authentication } exact />
                <Route path='/cadastro-usuario' component={ NewUser } exact />
            </Switch>
        </Router>
  );
}

export default App;

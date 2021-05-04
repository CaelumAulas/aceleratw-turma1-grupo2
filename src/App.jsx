import Authentication from "./pages/authentication/Authentication.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
        <Router>
            <Switch>
                <Route path='/' component={ Authentication } exact />
            </Switch>
        </Router>
  );
}

export default App;

import { Route, Switch } from 'wouter';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Switch>
      <Route path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}

export default App;

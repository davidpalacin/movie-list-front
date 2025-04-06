import { Route, Switch } from 'wouter';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';

function App() {
  return (
    <Switch>
      <Route path="/" component={Welcome} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;

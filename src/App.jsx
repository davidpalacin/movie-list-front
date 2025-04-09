import { Route, Switch } from 'wouter';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <Switch>
      <Route path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/movie/:id" component={MovieDetail} />
    </Switch>
  );
}

export default App;

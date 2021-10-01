import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TODOListPage from './pages/TODOListPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/user/:userId/' component={TODOListPage} />
        <Route path='*'>
          <ErrorPage errorCodeMsg={'404 Not Found'} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

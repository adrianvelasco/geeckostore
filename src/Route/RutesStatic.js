import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Rutas
import App from '../App';
import Home from '../Components/Home';
import Student from '../Components/Student';
import Teacher from '../Components/Teacher';
import Page404 from '../Components/Page404';
import Login from '../Components/Login';
import ListUser from '../Components/ListUsers';

const AppRoutes = () =>
  <App>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Student" component={Student} />
        <Route exact path="/Teacher" component={Teacher} />
        <Route exact path="/ListUsers" component={ListUser} />
        <Route exact component={Page404} />
      </Switch>
  </App>

export default AppRoutes;

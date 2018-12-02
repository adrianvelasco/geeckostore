import React, {Component} from 'react';

//Dependencia de enrutamiento statico (React-router-dom)
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Rutas
import Register from '../views/Register';//ruta de Registro
import Login from '../Login/Login';//ruta de Login
import Navegation from '../views/Navegation';//ruta de navegación

class Routerstatic extends Component{

    render(){
        let content = (
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/Register' component={Register} />
              <Route path='/Navegation' component={Navegation} />
            </Switch>
        </BrowserRouter>
        );
        return content;
    }
}

export default Routerstatic;

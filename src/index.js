import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AppRoutes from './Route/RutesStatic.js';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker/serviceWorker.js';
ReactDOM.render(
   <BrowserRouter>
     <AppRoutes/>
   </BrowserRouter>,
document.getElementById('root'));

serviceWorker.unregister();

// import React from 'react';
// import {render} from 'react-dom';
// import App from './components/App';
//
// render(
//   <App/>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Routerstatic from './Route/RutesStatic.js';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker/serviceWorker.js';

ReactDOM.render(
  <BrowserRouter>
    <Routerstatic/>
  </BrowserRouter>,
document.getElementById('root'));

serviceWorker.unregister();

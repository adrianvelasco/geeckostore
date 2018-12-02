import React, {Component} from 'react';
import "../css/Login.css";
class Login extends Component {

  render(){

    let content = (
      <div className="login-wrap">
        <div className="login-html">
          <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1" className="tab">Iniciar</label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" checked/><label htmlFor="tab-2" className="tab">Registrate</label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">Usuario</label>
                <input id="user" type="text" className="input"/>
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Contraseña</label>
                <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" checked/>
                <label htmlFor="check"><span className="icon"></span>Recuerdame</label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Iniciar Sesión"/>
              </div>
              <div className="hr"/>
              <div className="foot-link">
                <a href="/">Olvidaste tu Contraseña?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">Usuario</label>
                <input id="user" type="text" className="input"/>
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Contraseña</label>
                <input id="pass" type="password" className="input" data-type="password"/>
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Repita la Contraseña</label>
					      <input id="pass" type="password" className="input" data-type="password" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">Correo Electronico</label>
                <input id="pass" type="text" className="input" />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Registrate" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label htmlFor="tab-1" /><a href="/">Ya es Miembro??</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return content;
  }
}

export default Login;

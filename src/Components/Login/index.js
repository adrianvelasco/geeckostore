import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navegation from '../Navegation';
import PropTypes from 'prop-types'
import '../../css/Login.css';
import Grid from '@material-ui/core/Grid';
import {styles, ButtonIniciar, Facebook, Google} from '../../styles/Login';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import { BrowserRouter, Link} from 'react-router-dom';

//Dependencia FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab);



class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleInputChange(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

  handleAddUser = async (e) => {
    e.preventDefault();
    const data = {
      "username": this.state.username,
      "password": this.state.password
    }


    const url = 'http://localhost:3000/auth/login';

    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    };

    const request = new Request(url, settings);

    await fetch(request)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      const accessToken = response.accessToken;
      localStorage.setItem("accessToken", accessToken);

      const refreshToken = response.refreshToken;
      localStorage.setItem("refreshToken", refreshToken);

      const userInformation = response.userInformation;
      localStorage.setItem("userInformation", JSON.stringify(userInformation));

      const message = response.message;
      console.log("message", message);

      ReactDOM.render(
          <BrowserRouter>
           <Navegation/>
         </BrowserRouter>,
          document.getElementById('root')
      );
    })
    .catch(error => console.log(error));
  };


  render(){

    const {classes} = this.props;

    return(
      <div>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
             <Avatar className={classes.avatar}>
              <i className="fas fa-user"></i>
             </Avatar>
             <Typography component="h1" variant="h5">
               INICIAR SESIÓN
             </Typography>
             <form className={classes.form} onSubmit={this.handleAddUser}>
              <FormControl margin="normal" required fullWidth>
                <TextField name="username" required id="outlined-required" placeholder="Usuario"  variant="outlined" value={this.state.username} onChange={this.handleInputChange} />
                <TextField name="password" required id="filled-adornment-password" placeholder="Contraseña" margin="normal" variant="outlined" value={this.state.password} onChange={this.handleInputChange}
                  type={this.state.showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment:(
                    <InputAdornment variant="filled" position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                    ),
                  }}
                />
                <FormControlLabel className={classes.Checbox} control={<Checkbox value="remember" color="primary" required/>} label="Recuerdame" />
                <MuiThemeProvider theme={ButtonIniciar}>
                  <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>INICIAR</Button>
                </MuiThemeProvider>
                <div  variant="contained" className="strike" style={{padding:"10px"}}>
                   <span style={{color:'gray'}}>O Inicia con</span>
                </div>
              </FormControl>
              <Paper className={classes.paper2}>
                <Grid container spacing={16}>
                  <Grid item xs={6}>
                    <MuiThemeProvider theme={Facebook}>
                      <Button variant="contained" fullWidth color="primary">
                        <FontAwesomeIcon icon={['fab', 'facebook']}  pull="left" size="1x"/><strong>Facebook</strong>
                      </Button>
                    </MuiThemeProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <MuiThemeProvider theme={Google}>
                      <Button variant="contained" fullWidth color="primary">
                        <img width="15" height="15" alt="star" src={require('./pictures/png/001-search.png')} /> <strong>Google</strong>
                      </Button>
                    </MuiThemeProvider>
                  </Grid>
                </Grid>
                <br/>
                <Link to='/Register' style={{color: '#2196f3'}} ><h5>¿Eres nuevo? Registrate</h5></Link>
              </Paper>
             </form>
          </Paper>
        </main>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login);

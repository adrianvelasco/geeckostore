import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import '../css/Login.css';
import Navegation from '../views/Navegation';
import Grid from '@material-ui/core/Grid';
import {styles, ButtonIniciar, Facebook, Google} from '../styles/Login';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter, Link} from 'react-router-dom';


library.add(fab);



class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      account: '',
      password: '',
      showPassword: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);


    fetch('https://api.geecko.com.mx/v1/auth/login',{
    method: 'POST',
    body: data,
    }).then((response) => {
      console.log(response.headers);
      if(response.count === 0){
        ReactDOM.render(
        alert("El usuario no existe"),
        document.getElementById('info')
      );
      }else{
        ReactDOM.render(
          <BrowserRouter>
           <Navegation/>
         </BrowserRouter>,
          document.getElementById('root')
        );
      }
      const access_token = response.headers.get('Authorization');
      localStorage.setItem("Authorization", access_token);
      return response.json()}
    ).then(auth => {
      console.log(auth);
      localStorage.setItem("token", auth.token);
    });
  }


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
             <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <TextField name="account" required id="outlined-required" placeholder="Usuario"  variant="outlined" />
                <TextField name="password" required id="filled-adornment-password" placeholder="Contraseña" margin="normal" variant="outlined"
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
                        <img width="15" height="15" alt="star" src={require('../pictures/png/001-search.png')} /> <strong>Google</strong>
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

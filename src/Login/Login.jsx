import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {styles, button2, button3} from '../styles/Login';
import {Link} from 'react-router-dom';
import '../css/Login.css';

library.add(fab);

class Login extends React.Component{

  render(){
    const { classes } = this.props;

    return (
      <div className="fondo">
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Usuario</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Contraseña</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" />
              </FormControl>
              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recuerdame"/>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Continuar
              </Button>
              <MuiThemeProvider theme={button2}>
               <Button fullWidth type="button"  variant="contained" color="primary" size="medium" className={classes.button2}  onChange={this.onChange}>
                  <FontAwesomeIcon icon={['fab', 'google-plus-g']}  pull="left" size="1x"/><span>Gmail</span>
               </Button>
             </MuiThemeProvider>
             <MuiThemeProvider theme={button3}>
               <Button fullWidth type="button"  variant="contained" color="primary" size="medium" className={classes.button3}  onChange={this.onChange}>
                  <FontAwesomeIcon icon={['fab', 'facebook-f']}  pull="left" size="1x"/><span>Facebook</span>
               </Button>
             </MuiThemeProvider>
               <Link to='/Register' style={{color: '#2196f3'}} className={classes.linkregistre}><h5>¿Eres nuevo? Registrate</h5></Link>
            </form>
          </Paper>
        </main>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

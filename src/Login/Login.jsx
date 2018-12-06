import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {styles} from '../styles/Login';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
class Login extends Component{

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
             <form className={classes.form}>
               <FormControl margin="normal" required fullWidth>
                 <InputLabel htmlFor="email">Email Address</InputLabel>
                 <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
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

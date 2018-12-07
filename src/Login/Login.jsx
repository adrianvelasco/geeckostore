import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {styles} from '../styles/Login';
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

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      password: '',
      showPassword: '',
    };
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
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
             <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <TextField required id="outlined-required" label="" placeholder="Usuario" className={classes.textdrawer} margin="normal" variant="outlined"/>
                <TextField required id="filled-adornment-password" label="" placeholder="Contraseña" className={classes.textdrawer} margin="normal" variant="outlined"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={this.handleChange('password')}
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
                <FormControlLabel className={classes.Checbox} control={<Checkbox value="remember" color="primary" />} label="Recuerdame" required fullWidth/>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>INICIAR</Button>
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

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, CssBaseline, Paper, Typography, Grid, TextField, Button,
  InputAdornment, Input
} from '@material-ui/core';
import {  withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { LockOutlined, AccountCircle } from '@material-ui/icons';
import { styles, Guardar } from '../styles/Register';

class Register extends Component{

  render(){
    const {classes} = this.props;

    let content = (
      <div>
        <CssBaseline/>
        <main className={classes.main}>
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <AccountCircle/>
              </Avatar>
              <Typography component="h6" color="inherit">
                Crear Cuenta
              </Typography>
              <form className={classes.form}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth required id="name" name="name" type="text" label="Nombre" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth required id="lastName1"  name="lastName1" type="text" label="Apellido Paterno" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth required id="lastName2" name="lastName2" type="text" label="Apellido Materno"  />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth required id="number" name="number" type="number" label="Número Telefonico" autoComplete="billing address-line2"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth required id="email" name="email" type="text" label="Correo Electronico" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  fullWidth required id="birthdate" type="date" name="birthdate" label="Cumpleaños" defaultValue="2018-01-20" InputLabelProps={{shrink: true,}}className={classes.textField}  />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        fullWidth required id="account" name="account" label="Usuario" autoComplete="lname" placeholder="Usuario" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            startAdornment={
                                <InputAdornment position="start">
                                    <LockOutlined/>
                                </InputAdornment>
                            }
                        fullWidth required id="password" name="password" label="password" autoComplete="lname" placeholder="Contraseña" />
                    </Grid>
                    <MuiThemeProvider theme={Guardar}>
                        <Button type="submit" fullWidth variant="contained" color="primary" size="medium" className={classes.submit}>
                            Guardar
                        </Button>
                    </MuiThemeProvider>
                </Grid>
              </form>
            </Paper>
        </main>
      </div>
    );
    return content;
  }
}


 Register.propTypes = {
   classes: PropTypes.object.isRequired,
 };

 export default withStyles(styles)(Register);

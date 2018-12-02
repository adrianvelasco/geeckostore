// import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//
//
// export const styles = theme => ({
//     main: {
//       width: 'auto',
//       display: 'block', // Fix IE 11 issue.
//       marginLeft: theme.spacing.unit * 3,
//       marginRight: theme.spacing.unit * 3,
//       [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
//         width: 400,
//         marginLeft: 'auto',
//         marginRight: 'auto',
//       },
//     },
//     paper: {
//       marginTop: theme.spacing.unit * 3,
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 1}px`,
//     },
//     avatar: {
//       margin: theme.spacing.unit,
//       backgroundColor: '#ff5722',
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing.unit,
//     },
//     submit: {
//       marginTop: theme.spacing.unit * 1,
//     },
//     root: {
//       width: '100%',
//       maxWidth: '360px',
//       backgroundColor: theme.palette.background.paper,
//     },
//     button2:{
//        marginTop: theme.spacing.unit * -1,
//     },
//     button3:{
//        marginTop: theme.spacing.unit * 1,
//     },
//     linea:{
//       marginTop: theme.spacing.unit * -1,
//     },
//     linknav:{
//       marginLeft: theme.spacing.unit * 3,
//     },
//   });
//
//   export const button1 = createMuiTheme({
//     typography: {
//       useNextVariants: true,
//     },
//     palette:
//     {primary:{
//       main: '#ff5722',
//     }}
//   });
//   export const button2 = createMuiTheme({
//     typography: {
//       useNextVariants: true,
//     },
//     palette:
//     {primary:{
//       main: '#283593',
//     }}
//   });
//
//   export const button3 = createMuiTheme({
//     typography: {
//       useNextVariants: true,
//     },
//     palette:
//     {primary:{
//       main: '#C62828',
//     }}
//   });
//   import React,{Component} from 'react';
//   import ReactDOM from 'react-dom';
//   import PropTypes from 'prop-types';
//   import { BrowserRouter, Link} from 'react-router-dom';
//
//   import {
//     Avatar, Button, CssBaseline, FormControl, FormControlLabel, InputAdornment,
//     Checkbox, Input, InputLabel, Paper, Typography
//   } from '@material-ui/core';
//   import {  MuiThemeProvider, withStyles } from '@material-ui/core/styles'
//   import { AccountCircle, LockOutlined} from '@material-ui/icons';
//   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { fab } from '@fortawesome/free-brands-svg-icons'
//   import { library } from '@fortawesome/fontawesome-svg-core'
//   import {styles, button1, button2, button3}from '../styles/Login';
//   import '../css/Login.css';
//   import Navegation from '../views/Navegation';
//
//   library.add(fab);
//
//   class Login extends Component{
//      constructor(props){
//       super(props);
//       this.state = {
//         account:'',
//         password:'',
//
//       }
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     onChange = (e) => {
//       this.setState({ [e.target.name]: e.target.value });
//      }
//
//      handleSubmit(event) {
//       const data = new FormData(event.target);
//
//       fetch('https://api.geecko.com.mx/v1/auth/login',{
//       method: 'POST',
//       body: data,
//       }).then((response) => {
//         console.log(response.headers);
//         if(response.count === 0){
//           ReactDOM.render(
//           alert("El usuario no existe"),
//           document.getElementById('info')
//         );
//         }else{
//           ReactDOM.render(
//             <BrowserRouter>
//              <Navegation/>
//            </BrowserRouter>,
//             document.getElementById('root')
//           );
//         }
//         const access_token = response.headers.get('Authorization');
//         localStorage.setItem("Authorization", access_token);
//         return response.json()}
//       ).then(auth => {
//         console.log(auth);
//         localStorage.setItem("token", auth.token);
//       });
//
//       this.input1.value = '';
//       this.input2.value = '';
//       event.preventDefault();
//     }
//
//     render(){
//       const { classes } = this.props;
//       const {account, password} = this.state;
//
//       let content = (
//         <div>
//           <main className={classes.main}>
//             <CssBaseline/>
//               <Paper className={classes.paper}>
//                 <Avatar className={classes.avatar}>
//                   <LockOutlined />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                   Iniciar Sesión
//                 </Typography>
//                   <form className={classes.form} onSubmit={this.handleSubmit}>
//                     <FormControl margin="normal" required fullWidth>
//                       <InputLabel htmlFor="Usuario">Usuario</InputLabel>
//                       <Input ref={(input) => {this.input1 = input;}} value={account} onChange = {this.onChange}
//                         startAdornment={
//                           <InputAdornment position="start">
//                             <AccountCircle variant="contained"/>
//                           </InputAdornment>
//                         } type="text" name="account" id="account" autoComplete="lname" autoFocus />
//                     </FormControl>
//                     <FormControl margin="normal" required fullWidth>
//                       <InputLabel htmlFor="password">Contraseña</InputLabel>
//                       <Input ref={(input) => {this.input2 = input;}} value={password} onChange = {this.onChange}
//                         startAdornment={
//                           <InputAdornment position="start"  variant="outlined">
//                             <LockOutlined  variant="contained"/>
//                           </InputAdornment>
//                         }type="password" name="password" id="password" autoComplete="lname"/>
//                     </FormControl>
//                     <FormControlLabel
//                       control={<Checkbox value="remember" color="primary" required />}
//                       label="Recuerdame"
//                     />
//                     <MuiThemeProvider theme={button1}>
//                       <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}  onChange={this.onChange}>
//                          Iniciar sesión
//                       </Button>
//                     </MuiThemeProvider>
//                     <div  variant="contained" className="strike" style={{padding:"2px"}}>
//                        <span style={{color:'gray'}}><h5>O Inicia con</h5></span>
//                     </div>
//                      <MuiThemeProvider theme={button3}>
//                       <Button fullWidth type="button"  variant="contained" color="primary" size="medium" className={classes.button2}  onChange={this.onChange}>
//                          <FontAwesomeIcon icon={['fab', 'google']}  pull="left" size="1x"/>Gmail
//                       </Button>
//                     </MuiThemeProvider>
//                     <MuiThemeProvider theme={button2}>
//                       <Button fullWidth type="button"  variant="contained" color="primary" size="medium" className={classes.button3}  onChange={this.onChange}>
//                          <FontAwesomeIcon icon={['fab', 'facebook']}  pull="left" size="1x"/>Facebook
//                       </Button>
//                     </MuiThemeProvider>
//                       <br/>
//                       <div className="linkregegister">
//                           <Link to='/Register' style={{color: '#2196f3'}}><h5>¿Eres nuevo? Registrate</h5></Link>
//                       </div>
//                   </form>
//               </Paper>
//           </main>
//         </div>
//       );
//       return content;
//
//     }
//   }
//   Login.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
//
//   export default withStyles(styles)(Login);

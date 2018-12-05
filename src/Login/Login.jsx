import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {styles} from '../styles/Login';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
class Login extends Component{

  render(){

    const {classes} = this.props;

    return(
      <div>
        <main className={classes.main}>

        </main>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, IconButton
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/icons/Menu';
import {styles} from '../styles/Navegation';

class Navegation extends Component {

  render(){
    const {classes} = this.props;

    let content = (
      <div className={classes.root}>
        <AppBar position="static" style={{ background:' #FF5733 '}}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
              <Menu/>
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Geecko Store
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
    return content;
  }
}

Navegation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navegation);

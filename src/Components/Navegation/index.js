import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link, Switch, Route } from 'react-router-dom'
//Rutas
import ListUser from '../../Components/ListUsers';
import Home from '../../Components/Home';
import Student from '../../Components/Student';
import Teacher from '../../Components/Teacher';
//Styles
import { styles } from '../../styles/Navegation'
//Dependencia FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);

class Navegation extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    const listUser = props => <Link to="/ListUsers" {...props} />
    const home = props => <Link to="/Home" {...props} />
    const student = props => <Link to="/Student" {...props} />
    const teacher = props => <Link to="/Teacher" {...props} />

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
               <IconButton color="inherit" aria-label="Open drawer">
                 <FontAwesomeIcon icon={['fas', 'user-graduate']}  pull="left" size="1x"/>
              </IconButton>
              OxfordHouse
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
            <List component="nav">
            <ListItem button component={listUser}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button component={home}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={student}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Student" />
            </ListItem>
            <ListItem button component={teacher}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Teacher" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classNames(classes.content, {[classes.contentShift]: open,})}  >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path="/ListUsers" component={ListUser} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Student" component={Student} />
            <Route exact path="/Teacher" component={Teacher} />
          </Switch>
        </main>
      </div>
    );
  }
}

Navegation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navegation);

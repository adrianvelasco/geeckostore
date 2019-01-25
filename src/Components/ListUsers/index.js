import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styles } from '../../styles/ListUser.js';

class ListUser extends Component{

	constructor(props){
			super(props);
			this.state = {
				users: []
			}
	}
	static propTypes = {
		users: PropTypes.array.isRequired
	}

	componentDidMount = async () => {
    const url = 'http://localhost:3000/users';

    const settings = {
      method: 'GET'
    };

    const request = new Request(url, settings);

    await fetch(request)
    .then(response => response.json())
    .then(data => this.setState({users: data}))
    .catch(error => console.log(error))

  }

	render(){
		const users = this.state.users;
		console.log(users);
		const { classes } = this.props;

		return (
			<div className="row">
			    <Paper className={classes.root}>
				 <Table className={classes.table}>
			        <TableHead>
			          <TableRow>
			            <TableCell align="right">Nombre</TableCell>
			            <TableCell align="right">Usuario</TableCell>
			            <TableCell align="right">Rol</TableCell>
			            <TableCell align="right">Cumpleaños</TableCell>
			          </TableRow>
			        </TableHead>
			        <TableBody>
							{users && users.map((user, i) =>
								 <TableRow key={i}>
									 <TableCell align="right">{user.firstName + ' ' + user.lastName }</TableCell>
									 <TableCell align="right">{ user.username}</TableCell>
									 <TableCell align="right">{ user.role}</TableCell>
									 <TableCell align="right">{user.birthdate}</TableCell>
									 <TableCell></TableCell>
								 </TableRow>
							 )}
			        </TableBody>
		      	</Table>
		      </Paper>
			</div>
		)
	}
}
ListUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(ListUser);

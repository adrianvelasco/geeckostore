import React from 'react';
import Grid from '@material-ui/core/Grid'

import LeftPane from './LeftPane';
import RigthPane from './RigthPane';

const styles = {
	Paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,

	},
}


export default props =>
	<Grid container>
		<Grid item sm>
			<LeftPane styles={styles} />
		</Grid>
		<Grid item sm>
			<RigthPane styles={styles} />
		</Grid>
	</Grid>
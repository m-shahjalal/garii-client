import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Redirect, Route } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import useAuth from '../hooks/useAuth';

const Private = ({ children, ...rest }) => {
	const { user, loading } = useAuth();
	return loading ? (
		<Grid container justifyContent='center' alignItems='center'>
			<Box sx={{ height: '500px' }}>
				<CircleLoader style={{ marginRight: 10 }} size={50} />
			</Box>
		</Grid>
	) : (
		<Route
			{...rest}
			render={({ location }) =>
				user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default Private;

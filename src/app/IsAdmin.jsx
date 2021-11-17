import { Grid } from '@mui/material';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';
import { CircleLoader } from 'react-spinners';

const IsAdmin = ({ children, ...rest }) => {
	const { user, admin, loading } = useAuth();
	if (loading) {
		return (
			<Grid
				container
				justifyContent='center'
				alignItems='center'
				sx={{ height: '500px' }}>
				<CircleLoader style={{ marginRight: 10 }} size={50} />
			</Grid>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email && admin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default IsAdmin;

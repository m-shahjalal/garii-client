import { Card, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const DashboardCom = () => {
	const { user } = useAuth();
	return (
		<Card sx={{ p: 3, m: 8 }}>
			<Typography variant='h3' sx={{ textAlign: 'center' }}>
				{user?.displayName}
			</Typography>
			<Typography variant='body1' sx={{ textAlign: 'center', mt: 2 }}>
				{user?.email}
			</Typography>
		</Card>
	);
};

export default DashboardCom;

import { Button, Card } from '@mui/material';
import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router';

const Account = () => {
	const { user, logout } = useAuth();
	const history = useHistory();
	const logoutHandler = () => {
		logout();
		history.push('/login');
	};
	return (
		<Card sx={{ p: 3, m: 8 }}>
			<h1 style={{ textAlign: 'center' }}>{user?.displayName}</h1>
			<h4 style={{ textAlign: 'center' }}>{user?.email}</h4>
			<Button
				onClick={logoutHandler}
				sx={{ textAlign: 'center' }}
				variant='contained'>
				Logout
			</Button>
		</Card>
	);
};

export default Account;

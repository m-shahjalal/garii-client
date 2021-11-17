import {
	Button,
	Card,
	Container,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Link, useLocation, useHistory } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { useContext, useEffect, useState } from 'react';
import { Auth } from '../contexts/AuthContext';
import { CircleLoader } from 'react-spinners';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [fill, setFill] = useState('');
	const [password, setPassword] = useState('');
	const { state } = useLocation();
	const history = useHistory();
	const url = state?.from?.pathname ? state?.from?.pathname : '/';

	const {
		user,
		error,
		loading,
		googleLoading,
		signInUsingGoogle,
		registerWithEmail,
		updateName,
	} = useContext(Auth);

	const submitHandler = (e) => {
		e.preventDefault();
		setFill('');
		email && password
			? registerWithEmail(email, password, name)
			: setFill('Type email and password');

		name ? updateName(name) : setFill('Type your name');
	};

	useEffect(() => {
		user &&
			history.push({ pathname: url, state: state?.from?.state || '/' });
	}, [user, history, url, state]);

	return (
		<Container component='main' maxWidth='xs'>
			<Card sx={{ p: 4, mt: 10 }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Typography component='h1' variant='h4'>
						Join today!
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={submitHandler}
						sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='name'
									label='name'
									type='name'
									id='name'
									onChange={(e) => setName(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							{' '}
							{loading && (
								<CircleLoader
									style={{ marginRight: 10 }}
									size={30}
									color='white'
								/>
							)}
							Sign Up
						</Button>
						<Button
							onClick={signInUsingGoogle}
							color='secondary'
							fullWidth
							variant='contained'
							sx={{ mb: 2, color: 'white' }}>
							{!googleLoading ? (
								<GoogleIcon
									sx={{ mr: '3px', p: '2px', color: 'error' }}
								/>
							) : (
								<CircleLoader size={20} color='white' />
							)}
							Sign In With Google
						</Button>
						<Grid container>
							<Grid item>
								<Link
									to={{
										pathname: '/login',
										state: state,
									}}
									variant='body2'>
									Already have an account?
								</Link>
							</Grid>
						</Grid>
						{error && (
							<Typography
								align='center'
								variant='body1'
								color='error'>
								something went wrong
							</Typography>
						)}
						{fill && (
							<Typography
								align='center'
								variant='body1'
								color='error'>
								Please, fill every fields
							</Typography>
						)}
					</Box>
				</Box>
			</Card>
		</Container>
	);
};

export default Register;

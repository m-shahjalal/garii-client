import {
	Button,
	Card,
	Container,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { Link, useLocation, useHistory } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { Box } from '@mui/system';
import { useContext, useEffect, useState } from 'react';
import { Auth } from '../contexts/AuthContext';
import { CircleLoader } from 'react-spinners';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { state } = useLocation();
	const url = state?.from?.pathname ? state?.from?.pathname : '/';

	const history = useHistory();
	const {
		user,
		error,
		loading,
		googleLoading,
		signInUsingGoogle,
		loginWithEmail,
	} = useContext(Auth);

	const submitHandler = (e) => {
		e.preventDefault();
		email && password && loginWithEmail(email, password);
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
					<Typography component='h1' align='center' variant='h4'>
						Login & enjoy Deals
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
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
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
									autoComplete='new-password'
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
							{loading && (
								<CircleLoader
									style={{ marginRight: 10 }}
									size={30}
									color='white'
								/>
							)}
							Log in
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
										pathname: '/register',
										state: state,
									}}
									variant='body2'>
									Don't have an account?
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
					</Box>
				</Box>
			</Card>
		</Container>
	);
};

export default Login;

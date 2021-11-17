import {
	Button,
	TextField,
	Alert,
	Typography,
	Card,
	Grid,
} from '@mui/material';
import axios from '../../utils/axios';
import React, { useState } from 'react';

const MakeAdmin = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);

	const handleOnBlur = (e) => {
		setEmail(e.target.value);
	};
	const handleAdminSubmit = (e) => {
		e.preventDefault();
		axios
			.put('/user/admin', { email })
			.then((res) => {
				if (res.data.matchedCount)
					setSuccess('Make admin successfully');
				setEmail('');
			})
			.catch((err) => console.log(err.message));
	};
	return (
		<>
			<Typography align='center' variant='h4'>
				Make an Admin
			</Typography>
			<Card sx={{ p: 7, my: 8 }}>
				<Grid
					container
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					spacing={4}
					component='form'
					onSubmit={handleAdminSubmit}>
					<TextField
						required
						sx={{ width: '50%' }}
						label='Email'
						type='email'
						onBlur={handleOnBlur}
						variant='standard'
					/>
					<Button type='submit' sx={{ mt: 4 }} variant='contained'>
						Make Admin
					</Button>
				</Grid>
				{success && (
					<Alert sx={{ mt: 4 }} severity='success'>
						Made Admin successfully!
					</Alert>
				)}
			</Card>
		</>
	);
};

export default MakeAdmin;

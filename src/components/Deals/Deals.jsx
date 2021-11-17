import { Button, Container, TextField, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useState } from 'react';

const Deals = () => {
	const [email, setEmail] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	};
	return (
		<Box sx={{ bgcolor: indigo[50] }}>
			<Container
				sx={{
					mt: 8,
					py: 12,
					display: 'flex',
					flexDirection: 'column',
					justifyContext: 'center',
					alignItems: 'center',
				}}>
				<Typography component='h1' variant='h3'>
					Get Our Monthly Deals
				</Typography>
				<Typography marginTop={1} variant='caption1' align='center'>
					It centers the recipient's needs with the slogan "Happy
					Inbox, Happy Life." Paired with a low-friction CTA, the copy
					is simple and effective.
				</Typography>
				<Box
					component='form'
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 3 }}>
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 1, mb: 2 }}>
						Sign In
					</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default Deals;

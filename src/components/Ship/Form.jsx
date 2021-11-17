import { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

const Form = ({ state, total, email }) => {
	const history = useHistory();
	const [inputs, setInputs] = useState({});
	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post('/orders', {
				address: inputs,
				totalItems: state.length,
				total,
				email,
			})
			.then((res) => {
				console.log(res.data);
				res.data.acknowledged && history.push('dashboard/payment');
			});
		history.push('/payment');
	};
	const changeHandler = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};
	return (
		<Container sx={{ my: 8 }}>
			<Typography variant='h5' align='center' sx={{ my: 4 }}>
				Fill the necessary information
			</Typography>
			<Grid
				component='form'
				onSubmit={submitHandler}
				container
				spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='firstName'
						name='firstName'
						label='First name'
						fullWidth
						autoComplete='given-name'
						variant='standard'
						onChange={changeHandler}
						value={inputs.firstName || ''}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='lastName'
						name='lastName'
						label='Last name'
						fullWidth
						autoComplete='family-name'
						variant='standard'
						onChange={changeHandler}
						value={inputs.lastName || ''}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id='address1'
						name='address1'
						label='Address line 1'
						fullWidth
						autoComplete='shipping address-line1'
						variant='standard'
						onChange={changeHandler}
						value={inputs.address1 || ''}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id='address2'
						name='address2'
						label='Address line 2'
						fullWidth
						autoComplete='shipping address-line2'
						variant='standard'
						onChange={changeHandler}
						value={inputs.address2 || ''}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='city'
						name='city'
						label='City'
						fullWidth
						autoComplete='shipping address-level2'
						variant='standard'
						onChange={changeHandler}
						value={inputs.city || ''}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id='state'
						name='state'
						label='State/Province/Region'
						fullWidth
						variant='standard'
						onChange={changeHandler}
						value={inputs.state || ''}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='zip'
						name='zip'
						label='Zip / Postal code'
						fullWidth
						autoComplete='shipping postal-code'
						variant='standard'
						onChange={changeHandler}
						value={inputs.zip || ''}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id='country'
						name='country'
						label='Country'
						fullWidth
						autoComplete='shipping country'
						variant='standard'
						onChange={changeHandler}
						value={inputs.country || ''}
					/>
				</Grid>
				<Grid container justifyContent='center' marginTop={4} xs={12}>
					<Button
						component={Link}
						to='/cart'
						variant='contained'
						sx={{ mt: 3, ml: 1 }}>
						Go back to cart
					</Button>
					<Button
						type='submit'
						variant='contained'
						sx={{ mt: 3, ml: 1 }}>
						Go To Payment
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Form;

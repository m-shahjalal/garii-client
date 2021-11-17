import {
	Container,
	Typography,
	TextField,
	Card,
	Button,
	Alert,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from '../../utils/axios';
import { useState } from 'react';
import { CircleLoader } from 'react-spinners';

const AddProduct = () => {
	const [inputs, setInputs] = useState({});
	const [success, setSuccess] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const changeHandler = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');
		axios
			.post('/products', inputs)
			.then(({ data }) => {
				setInputs({});
				data.acknowledged && setSuccess(true);
				setLoading(false);
			})
			.catch((error) => {
				setSuccess(false);
				setError('something is wrong');
				setLoading(false);
			});
	};
	return (
		<Container>
			<Card container spacing={4} sx={{ p: 3, my: 2 }}>
				<Typography variant='h4' align='center' sx={{ my: 2 }}>
					Add a product
				</Typography>
				<Box component='form' onSubmit={submitHandler}>
					<TextField
						required
						name='title'
						onChange={changeHandler}
						value={inputs.title || ''}
						fullWidth
						label='Title'
						sx={{ my: 1 }}
					/>
					<TextField
						required
						onChange={changeHandler}
						value={inputs.description || ''}
						fullWidth
						multiline
						rows={6}
						label='Description'
						name='description'
						sx={{ my: 1 }}
					/>
					<TextField
						required
						onChange={changeHandler}
						value={inputs.price || ''}
						name='price'
						fullWidth
						label='price'
						type='text'
						sx={{ my: 1 }}
					/>
					<TextField
						required
						name='image'
						onChange={changeHandler}
						value={inputs.image || ''}
						fullWidth
						label='Image link'
						type='text'
						sx={{ my: 1 }}
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ my: 2 }}>
						{loading && (
							<CircleLoader
								style={{ marginRight: 10 }}
								size={30}
								color='white'
							/>
						)}
						Submit
					</Button>
				</Box>
				{success && (
					<Alert sx={{ my: 4 }} severity='success'>
						add Product successfully!
					</Alert>
				)}
				{error && (
					<Alert sx={{ my: 4 }} severity='error'>
						{error}
					</Alert>
				)}
			</Card>
		</Container>
	);
};

export default AddProduct;

import { Card, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router';
import Form from '../components/Ship/Form';
import ShipProducts from '../components/Ship/ShipProduct';
import useAuth from '../hooks/useAuth';

const Purchase = () => {
	const { state } = useLocation();
	const { user } = useAuth();
	const total = state
		.map((item) => parseInt(item.price) * item.count)
		.reduce((a, b) => a + b);

	return !state ? (
		<Typography variant='h4' align='center' sx={{ my: 16 }}>
			Application State is empty
		</Typography>
	) : (
		<Container sx={{ mt: 7 }}>
			<Card sx={{ m: 4 }}>
				<ShipProducts total={total} state={state} />
			</Card>
			<Card sx={{ m: 4, mt: 10 }}>
				<Form state={state} total={total} email={user.email} />
			</Card>
		</Container>
	);
};

export default Purchase;

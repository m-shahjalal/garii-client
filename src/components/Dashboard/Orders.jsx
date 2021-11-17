import {
	Button,
	Grid,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';
import { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';
import DeleteForever from '@mui/icons-material/DeleteForever';

const Orders = () => {
	const [orders, setOrders] = useState(null);
	const [loading, setLoading] = useState(true);

	const deleteHandler = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			const index = orders.findIndex((order) => order._id === id);
			const newList = [...orders];
			newList.splice(index, 1);
			setOrders(newList);
			deleteFetch(id);
		}
	};

	const deleteFetch = (id) => {
		axios
			.delete(`/orders/${id}`)
			.then(() => console.log('Delete successfully'))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		axios.get('/orders').then((res) => {
			setOrders(res.data);
			setLoading(false);
		});
	}, []);

	return (
		<Box sx={{ p: 3 }}>
			<Typography variant='h4' sx={{ mb: 3 }} align='center'>
				Your orders
			</Typography>
			{loading ? (
				<Grid
					container
					justifyContent='center'
					alignItems='center'
					sx={{ height: '500px' }}>
					<CircleLoader style={{ marginRight: 10 }} size={50} />
				</Grid>
			) : orders.length ? (
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 500 }} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Order ID</TableCell>
								<TableCell align='center'>Total Item</TableCell>
								<TableCell align='center'>
									Total Price
								</TableCell>
								<TableCell align='center'>Delete</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders.map((row) => (
								<TableRow
									key={row._id}
									sx={{
										'&:last-child td, &:last-child th': {
											border: 0,
										},
									}}>
									<TableCell component='th' scope='row'>
										{row._id}
									</TableCell>
									<TableCell align='center'>
										{row.totalItems}
									</TableCell>
									<TableCell align='center'>
										{row.total} lacs
									</TableCell>
									<TableCell align='center'>
										<IconButton
											onClick={() =>
												deleteHandler(row._id)
											}>
											<DeleteForever color='error' />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<Grid container flexDirection='column' justifyContent='center'>
					<Typography variant='h5' sx={{ my: 3 }} align='center'>
						You don't have any order
					</Typography>
					<Button component={Link} to='/trending'>
						Go Back To By product
					</Button>
				</Grid>
			)}
		</Box>
	);
};

export default Orders;

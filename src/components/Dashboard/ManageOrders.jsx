import {
	Grid,
	Paper,
	Table as MUITable,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { CircleLoader } from 'react-spinners';
import Table from '../../components/Table/Table';
import axios from '../../utils/axios';

const ManageOrders = () => {
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
		axios
			.get('/orders')
			.then((res) => setOrders(res.data))
			.then((e) => console.log(e))
			.finally(() => setLoading(false));
	}, []);

	return (
		<Box sx={{ p: 3 }}>
			<Typography variant='h4' sx={{ mb: 3 }} align='center'>
				Orders
			</Typography>
			{loading ? (
				<Grid
					container
					justifyContent='center'
					alignItems='center'
					sx={{ height: '500px' }}>
					<CircleLoader style={{ marginRight: 10 }} size={50} />
				</Grid>
			) : orders?.length ? (
				<TableContainer component={Paper}>
					<MUITable sx={{ minWidth: 500 }} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>User</TableCell>
								<TableCell align='center'>Total Item</TableCell>
								<TableCell align='center'>
									Total Price
								</TableCell>
								<TableCell align='center'>completed</TableCell>
								<TableCell align='center'>Delete</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders.map((row) => (
								<Table
									row={row}
									key={row._id}
									deleteHandler={deleteHandler}
								/>
							))}
						</TableBody>
					</MUITable>
				</TableContainer>
			) : (
				<Typography variant='h5' sx={{ my: 3 }} align='center'>
					You don't have any order
				</Typography>
			)}
		</Box>
	);
};

export default ManageOrders;

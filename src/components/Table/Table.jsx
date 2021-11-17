import DeleteForever from '@mui/icons-material/DeleteForever';
import { IconButton, TableCell, TableRow } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

const Table = ({ row, deleteHandler }) => {
	const [completed, setCompleted] = useState(row.completed || false);

	const completedHandler = () => {
		if (window.confirm('Are you sure to want this?')) {
			setCompleted(!completed);
		}
	};

	useEffect(() => {
		row._id &&
			axios
				.put(`/orders/${row._id}`, { completed: completed })
				.then((res) => {
					console.log('Successfully updated');
				})
				.catch((err) => console.log(err));
	}, [completed, row._id]);
	return (
		<TableRow
			sx={{
				'&:last-child td, &:last-child th': {
					border: 0,
				},
			}}>
			<TableCell component='th' scope='row'>
				{row.email}
			</TableCell>
			<TableCell align='center'>{row.totalItems}</TableCell>
			<TableCell align='center'>{row.total} lacs</TableCell>
			<TableCell align='center'>
				<IconButton onClick={completedHandler}>
					<CheckBoxIcon color={!completed ? '#cfd8dc' : 'success'} />
				</IconButton>
			</TableCell>
			<TableCell align='center'>
				<IconButton onClick={() => deleteHandler(row._id)}>
					<DeleteForever color='error' />
				</IconButton>
			</TableCell>
		</TableRow>
	);
};

export default Table;

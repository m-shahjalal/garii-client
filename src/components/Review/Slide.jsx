import { Box, Rating, Typography } from '@mui/material';

const Slide = ({ item }) => {
	const { name, text, star } = item;
	return (
		<Box
			sx={{
				px: 5,
				pb: 10,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				cursor: 'pointer',
			}}>
			<Typography align='center' sx={{ my: 2 }}>
				{text}
			</Typography>
			<Typography variant='h5' sx={{ mb: 1 }}>
				{name}
			</Typography>
			<Rating
				name='read-only'
				precision={0.5}
				value={parseInt(star)}
				readOnly
			/>
		</Box>
	);
};

export default Slide;

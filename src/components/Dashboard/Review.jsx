import { useEffect, useState } from 'react';
import {
	Alert,
	Button,
	Card,
	Grid,
	Rating,
	TextField,
	Typography,
	Box,
} from '@mui/material';
import useAuth from '../../hooks/useAuth';
import axios from '../../utils/axios';
import StarIcon from '@mui/icons-material/Star';
import { CircleLoader } from 'react-spinners';

const labels = {
	0.5: 'Useless',
	1: 'Useless+',
	1.5: 'Poor',
	2: 'Poor+',
	2.5: 'Ok',
	3: 'Ok+',
	3.5: 'Good',
	4: 'Good+',
	4.5: 'Excellent',
	5: 'Excellent+',
};

const Review = () => {
	const [text, setText] = useState('');
	const [star, setStar] = useState(2.5);
	const [review, setReview] = useState(null);
	const [loading, setLoading] = useState(true);
	const [hover, setHover] = useState(-1);
	const [success, setSuccess] = useState('');
	const { user } = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('/reviews', {
				name: user.displayName,
				email: user.email,
				text,
				star,
			})
			.then((res) => {
				setSuccess(true);
				setText('');
				axios
					.get('/review')
					.then((res) => {
						setReview(res.data);
						setLoading(false);
					})
					.catch((e) => console.log(e));
			})
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		axios
			.get('/review')
			.then((res) => {
				setReview(res.data);
				setLoading(false);
			})
			.catch((e) => console.log(e));
	}, []);

	return (
		<>
			<Typography sx={{ mt: 3 }} align='center' variant='h4'>
				Make a Review
			</Typography>

			{loading ? (
				<Grid
					container
					justifyContent='center'
					alignItems='center'
					sx={{ height: '500px' }}>
					<CircleLoader style={{ marginRight: 10 }} size={50} />
				</Grid>
			) : review?.length ? (
				<Box sx={{ my: 3 }}>
					<Typography align='center' sx={{ mb: 3 }} variant='h5'>
						You already have review
					</Typography>
					{review.map((item) => (
						<Card
							key={item._id}
							sx={{
								p: 7,
								mt: 8,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}>
							<Typography sx={{ mb: 3 }} variant='body1'>
								{item.text}
							</Typography>
							<Rating value={parseInt(item.star)} readOnly />
						</Card>
					))}
				</Box>
			) : null}
			<Card sx={{ p: 7, mt: 8 }}>
				<Grid
					container
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					spacing={4}
					component='form'
					onSubmit={handleSubmit}>
					<TextField
						required
						sx={{ width: '100%', maxWidth: '700px', mb: 4 }}
						label='Write your review'
						type='text'
						multiline
						rows={5}
						onChange={(e) => setText(e.target.value)}
					/>
					<Grid
						sx={{ w: '100%', maxWidth: '250px' }}
						container
						justifyContent='center'>
						<Rating
							sx={{ flexGrow: '1' }}
							name='hover-feedback'
							size='large'
							value={star}
							precision={0.5}
							onChange={(event, newValue) => {
								setStar(newValue);
							}}
							onChangeActive={(event, newHover) => {
								setHover(newHover);
							}}
							emptyIcon={
								<StarIcon
									style={{ opacity: 0.55 }}
									fontSize='inherit'
								/>
							}
						/>
						{star !== null && (
							<Box sx={{ flexGrow: '1' }}>
								{labels[hover !== -1 ? hover : star]}
							</Box>
						)}
					</Grid>
					<Button type='submit' sx={{ mt: 4 }} variant='contained'>
						Post Review
					</Button>
				</Grid>
			</Card>
			{success && (
				<Alert sx={{ mt: 4, mb: 8 }} severity='success'>
					Made Review successfully!
				</Alert>
			)}
		</>
	);
};

export default Review;

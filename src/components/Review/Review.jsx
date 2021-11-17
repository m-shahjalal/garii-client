import { Card, Container, Grid, Typography } from '@mui/material';
import axios from '../../utils/axios';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import { CircleLoader } from 'react-spinners';

const settings = {
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	focusOnSelect: true,
	pauseOnHover: true,
	infinite: true,
};

const Review = () => {
	const [review, setReview] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('/reviews')
			.then((res) => {
				setReview(res.data);
				setError(false);
			})
			.then((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);
	return (
		<Container sx={{ mt: 6 }}>
			<Card>
				<Typography variant='h4' align='center' sx={{ mt: 6, mb: 3 }}>
					Our Client says...
				</Typography>
				<Slider {...settings}>
					{review &&
						review.map((item) => (
							<Slide key={item._id} item={item} />
						))}
				</Slider>
				{loading && (
					<Grid
						container
						justifyContent='center'
						alignItems='center'
						sx={{ height: '100px' }}>
						<CircleLoader style={{ marginRight: 10 }} size={50} />
					</Grid>
				)}
				{error && (
					<Typography
						variant='h4'
						align='center'
						color='error'
						sx={{ mt: 3, mb: 3 }}>
						Something gone wrong
					</Typography>
				)}
			</Card>
		</Container>
	);
};

export default Review;

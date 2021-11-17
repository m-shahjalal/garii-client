import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import bgImg from '../../images/cover.jpg';
import car from '../../images/hero.jpg';

const Hero = () => {
	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			sx={{
				backgroundImage: `url(${bgImg})`,
				minHeight: `calc(100vh - 64px)`,
			}}>
			<Grid xs={12} sm={6} md={4} lg={6} item>
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}>
					<Typography align='center' color='white' variant='h2'>
						Hello, Buy a card today!
					</Typography>
					<Typography
						sx={{ mt: 2, color: 'rgba(255, 255, 255, 0.8)' }}
						variant='subtitle1'
						color='white'
						align='center'>
						We know the difference is in the details and that’s why
						our car rental services, in the tourism and business
						industry, stand out for their quality and good taste.
					</Typography>
					<Button
						variant='outlined'
						color='info'
						sx={{ mt: 3, width: '200px', alignSelf: 'center' }}
						component={Link}
						to='/trending'>
						Explore cars
					</Button>
				</Container>
			</Grid>
			<Grid item xs={12} sm={6} md={8} lg={6}>
				<Container sx={{ width: 1, py: 6 }}>
					<img
						src={car}
						alt='car'
						style={{
							width: '100%',
							height: 'auto',
							borderRadius: '10px',
						}}
					/>
				</Container>
			</Grid>
		</Grid>
	);
};

export default Hero;

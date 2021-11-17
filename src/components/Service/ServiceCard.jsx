import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

const ServiceCard = ({ img, title, price }) => {
	return (
		<Grid item xs={12} sm={6} md={6} lg={4}>
			<Card
				sx={{
					maxWidth: '100%',
					height: '100%',
					mb: 2,
					boxShadow: '3px 3px 20px rgba(0,0,0,0.1)',
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'column',
				}}>
				<CardMedia
					component='img'
					height='350'
					sx={{ objectFit: 'contain' }}
					image={img}
					alt='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{title}
					</Typography>
				</CardContent>
				<CardActions
					color='primary'
					sx={{
						display: 'flex',
						mb: 3,
						mx: 1,
						fontWeight: 'bold',
					}}>
					<Typography sx={{ width: '200px', ml: 2 }}>
						${price}
					</Typography>
					<Button fullWidth variant='contained'>
						<BookmarkAddIcon sx={{ mr: 1 }} />
						Book
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ServiceCard;

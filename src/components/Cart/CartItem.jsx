import { Card, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Plus from '@mui/icons-material/Add';
import Minus from '@mui/icons-material/Remove';
import Delete from '@mui/icons-material/DeleteForever';

const CartItem = ({ id, title, price, image, count, updateCart }) => {
	return (
		<Grid
			item
			xs={12}
			sm={6}
			lg={4}
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				pb: '20px',
			}}>
			<Card sx={{ display: 'flex', minHeight: '300px' }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}>
					<Grid
						sx={{ height: 1, p: 2 }}
						container
						flexDirection='column'
						justifyContent='space-between'>
						<Typography
							component='div'
							variant='body1'
							sx={{ fontSize: '18px' }}>
							{title}
						</Typography>
						<Typography component='div' variant='h6'>
							{price} lacs
						</Typography>
						<Typography component='div' variant='h6'>
							Total: {count}
						</Typography>
						<Grid
							sx={{
								boxShadow: '2px 2px 20px #55555530',
								borderRadius: '5px',
								width: '130px',
							}}
							justifyContent='center'
							alignItems='center'
							container>
							<Grid item sm={4}>
								<IconButton
									onClick={() => updateCart(id, 'plus')}>
									<Plus color='success' />
								</IconButton>
							</Grid>
							<Grid item sm={4}>
								<IconButton
									onClick={() => updateCart(id, 'minus')}>
									<Minus color='warning' />
								</IconButton>
							</Grid>
							<Grid item sm={4}>
								<IconButton
									onClick={() => updateCart(id, 'delete')}>
									<Delete color='error' />
								</IconButton>
							</Grid>
						</Grid>
					</Grid>
				</Box>
				<CardMedia
					component='img'
					sx={{ width: 200, objectFit: 'contain', p: 2 }}
					image={image}
					alt='Live from space album cover'
				/>
			</Card>
		</Grid>
	);
};

export default CartItem;

import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { indigo } from '@mui/material/colors';

const linkStyle = {
	textDecoration: 'none',
	display: 'block',
	mb: 2,
};

const Footer = () => {
	return (
		<Box
			component='footer'
			sx={{
				py: 3,
				px: 2,
				pt: 10,
				backgroundColor: indigo[100],
				position: 'relative',
				// zIndex: '9999999',
			}}>
			<Container>
				<Grid container>
					<Grid item xs={12} sm={4}>
						<Box sx={{ mb: 1, mt: 2 }}>Help Desk</Box>
						<Box>
							<Typography
								sx={linkStyle}
								component={Link}
								to='/'
								variant='body2'
								color='text.primary'>
								Contact
							</Typography>
							<Typography
								sx={linkStyle}
								component={Link}
								to='/'
								variant='body2'
								color='text.primary'>
								Support
							</Typography>
							<Typography
								sx={linkStyle}
								component={Link}
								to='/'
								variant='body2'
								color='text.primary'>
								Privacy
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box sx={{ mb: 1, mt: 2 }}>Accounts manage</Box>
						<Box>
							<Typography
								sx={linkStyle}
								component={Link}
								to='/login'
								variant='body2'
								color='text.primary'>
								Login
							</Typography>
							<Typography
								sx={linkStyle}
								component={Link}
								to='/register'
								variant='body2'
								color='text.primary'>
								Register
							</Typography>
							<Typography
								sx={linkStyle}
								component={Link}
								to='/account'
								variant='body2'
								color='text.primary'>
								Account
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box sx={{ mb: 1, mt: 2 }}>Important links</Box>
						<Box>
							<Typography
								sx={linkStyle}
								component={Link}
								to='/'
								variant='body2'
								color='text.primary'>
								Gallery
							</Typography>
							<Typography
								sx={linkStyle}
								component={Link}
								to='/'
								variant='body2'
								color='text.primary'>
								CEO
							</Typography>
							<Typography
								sx={linkStyle}
								component={Link}
								to='/'
								variant='body2'
								color='text.primary'>
								Inquiry
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Box sx={{ borderTop: '1px solid #777', mt: 1 }}>
				<Container
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						my: 3,
					}}>
					<Typography variant='body2' color='text.secondary'>
						{'Copyright © '}
						<Link
							style={{
								textDecoration: 'none',
								color: '#555',
							}}
							to='/'>
							garii.com
						</Link>{' '}
						{new Date().getFullYear()}
						{'.'}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Build with 💝 by{' '}
						<a
							href='https://github.com/m-shahjalal'
							target='_blank'
							style={{
								textDecoration: 'none',
								color: '#555',
							}}
							rel='noopener noreferrer'>
							SHAHJALAL
						</a>
					</Typography>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;

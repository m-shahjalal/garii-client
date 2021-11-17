import {
	AppBar,
	Badge,
	Button,
	Container,
	IconButton,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Sidebar from './Sidebar';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import { Product } from '../../contexts/ProductContext';
import { Auth } from '../../contexts/AuthContext';

const styles = {
	color: 'white',
	textDecoration: 'none',
	padding: '10px',
	fontWeight: 'normal',
	lineHeight: 'normal',
};

const navItems = ['Trending', 'Servicing', 'About Us'];

const Header = () => {
	const [anchorEl, setAnchorEl] = useState(false);
	const { breakpoints } = useTheme();
	const media = useMediaQuery(breakpoints.down('md'));
	const { cart } = useContext(Product);
	const { user, logout } = useContext(Auth);
	const { push } = useHistory();

	const logoutHandler = () => {
		logout();
		push('/login');
	};

	return (
		<>
			<AppBar position='sticky' elevation={0} sx={{ bgcolor: 'primary' }}>
				<Container>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							pt: '10px',
							pb: 1,
						}}>
						<Box>
							<Typography
								sx={{
									...styles,
									lineHeight: 1.75,
									fontWeight: 'bold',
								}}
								component={NavLink}
								variant='h5'
								to='/'>
								GARII
							</Typography>
						</Box>
						{media ? (
							<Button onClick={() => setAnchorEl(true)}>
								<MenuIcon
									sx={{ color: 'white' }}
									fontSize='large'
								/>
							</Button>
						) : (
							<>
								<Box>
									{navItems.map((item) => (
										<Button
											key={item}
											size='small'
											sx={styles}
											component={NavLink}
											to={`/${item
												.split(' ')
												.join('-')
												.toLowerCase()}`}>
											{item}
										</Button>
									))}
								</Box>
								<Box>
									{user ? (
										<>
											<Button
												size='small'
												disableElevation
												sx={styles}
												component={NavLink}
												to='/dashboard'>
												dashboard
											</Button>
											<Button
												size='small'
												disableElevation
												sx={styles}
												component={NavLink}
												to='/account'>
												{user.displayName}
											</Button>
											<Button
												size='small'
												color='secondary'
												variant='contained'
												disableElevation
												sx={styles}
												onClick={logoutHandler}>
												logout
											</Button>
										</>
									) : (
										<>
											<Button
												size='small'
												color='secondary'
												variant='contained'
												disableElevation
												sx={styles}
												component={NavLink}
												to='/register'>
												Join
											</Button>
											<Button
												size='small'
												disableElevation
												sx={styles}
												component={NavLink}
												to='/login'>
												Login
											</Button>
										</>
									)}
									<IconButton component={NavLink} to='/cart'>
										<Badge
											badgeContent={cart?.length}
											color='error'>
											<ShoppingCartTwoToneIcon
												sx={{ color: 'white' }}
											/>
										</Badge>
									</IconButton>
								</Box>
							</>
						)}
					</Box>
				</Container>
			</AppBar>

			<Sidebar
				item={navItems}
				anchorEl={anchorEl}
				setAnchorEl={setAnchorEl}
				badge={cart?.length}
				user={user}
				logout={logout}
			/>
		</>
	);
};
export default Header;

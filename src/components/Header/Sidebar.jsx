import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
	Button,
	Badge,
} from '@mui/material';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useHistory } from 'react-router-dom';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import LogoutIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = ({ badge, item, anchorEl, setAnchorEl, user, logout }) => {
	const history = useHistory();

	const clickHandler = (path = undefined) => {
		if (path !== undefined) {
			history.push(`/${path?.split(' ')?.join('-')?.toLowerCase()}`);
			setAnchorEl(!anchorEl);
		} else setAnchorEl(!anchorEl);
	};
	const logoutHandler = () => {
		logout();
		setAnchorEl(!anchorEl);
		history.push('/login');
	};
	return (
		<Drawer
			onClose={() => setAnchorEl(false)}
			onOpen={() => setAnchorEl(true)}
			anchor='right'
			open={anchorEl}>
			<List sx={{ width: '200px' }}>
				<ListItem disablePadding>
					<ListItemIcon>
						<Button
							disableElevation
							color='secondary'
							onClick={() => setAnchorEl(!anchorEl)}>
							<ClearIcon sx={{ ml: 3 }} />
							<ListItemText
								sx={{ ml: 1, mr: 10 }}
								primary='Back'
							/>
						</Button>
					</ListItemIcon>
				</ListItem>
				{item &&
					item.map((item) => (
						<ListItem disablePadding key={item}>
							<ListItemButton onClick={() => clickHandler(item)}>
								<ListItemText sx={{ ml: 2 }} primary={item} />
							</ListItemButton>
						</ListItem>
					))}
				{user ? (
					<>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => clickHandler('dashboard')}>
								<CardGiftcardIcon sx={{ ml: 1 }} />
								<ListItemText primary='Dashboard' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => clickHandler('account')}>
								<VerifiedUser sx={{ ml: 1 }} />
								<ListItemText
									primary={user?.displayName || 'user'}
								/>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={logoutHandler}>
								<LogoutIcon sx={{ ml: 1 }} />
								<ListItemText primary='Logout' />
							</ListItemButton>
						</ListItem>
					</>
				) : (
					<>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => clickHandler('login')}>
								<PersonOutlineTwoToneIcon sx={{ ml: 1 }} />
								<ListItemText primary='login' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => clickHandler('register')}>
								<PersonOutlineTwoToneIcon sx={{ ml: 1 }} />
								<ListItemText primary='register' />
							</ListItemButton>
						</ListItem>
					</>
				)}

				<ListItem disablePadding>
					<ListItemButton onClick={() => clickHandler('cart')}>
						<Badge
							badgeContent={badge}
							color='error'
							sx={{ ml: 1, mr: 2 }}>
							<ShoppingCartTwoToneIcon color='action' />
						</Badge>
						<ListItemText primary='Cart' />
					</ListItemButton>
				</ListItem>
			</List>
		</Drawer>
	);
};

export default Sidebar;

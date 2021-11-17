import {
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LayersIcon from '@mui/icons-material/Layers';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const drawerWidth = 220;

const Sidebar = ({ open, toggleDrawer }) => {
	return (
		<MuiDrawer variant='permanent' open={true}>
			<Toolbar>
				<IconButton onClick={toggleDrawer}>
					<ChevronLeftIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<List>
				<div>
					<ListItem button>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary='Dashboard' />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<ShoppingCartIcon />
						</ListItemIcon>
						<ListItemText primary='My Orders' />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText primary='Customers' />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<ReviewsIcon />
						</ListItemIcon>
						<ListItemText primary='Review' />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<LayersIcon />
						</ListItemIcon>
						<ListItemText primary='Integrations' />
					</ListItem>
				</div>
			</List>
		</MuiDrawer>
	);
};

export default Sidebar;

import { createTheme } from '@mui/material/styles';
import { indigo, yellow, red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: indigo[500],
		},
		secondary: {
			main: yellow[800],
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;

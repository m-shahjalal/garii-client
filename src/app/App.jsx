import { CssBaseline } from '@mui/material';
import AuthContext from '../contexts/AuthContext';
import Routes from './Router';
import ProductContext from '../contexts/ProductContext';
import initializeFirebase from '../firebase/firebase.initialize';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../utils/theme';

initializeFirebase();
const App = () => {
	return (
		<AuthContext>
			<ProductContext>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes />
				</ThemeProvider>
			</ProductContext>
		</AuthContext>
	);
};
export default App;

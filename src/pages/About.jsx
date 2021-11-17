import {
	Button,
	Container,
	Grid,
	List,
	ListItem,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Tick from '@mui/icons-material/CheckCircle';

const About = () => {
	return (
		<Box sx={{ my: 10 }}>
			<Container>
				<Typography variant='h4' align='center' sx={{ my: 7 }}>
					ABOUT US
				</Typography>
				<Grid
					container
					justifyContent='center'
					alignItems='center'
					columnSpacing={4}
					rowSpacing={{ xs: 4, md: 8 }}>
					<Grid item xs={12} sm={6}>
						<img
							src='https://source.unsplash.com/E7Tzh2TTS6c'
							alt='random'
							width='100%'
							style={{
								objectFit: 'cover',
								height: '350px',
								borderRadius: '5px',
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant='h4' sx={{ mb: 3 }}>
							Who wer are
						</Typography>
						<Typography variant='body1'>
							After all, cities are very different from the
							natural environment of trees. For instance, many
							city trees die prematurely because their roots lack
							sufficient space to expand and are unable to absorb
							the necessary quantities of water to stay alive.
							Another challenge tree planting companies have to
							face is that of root heave. Without a proper system
							for root management in place, tree roots will grow
							to the surface and damage infrastructure such as
							pavement.
						</Typography>
					</Grid>

					<Grid
						justifyContent='center'
						alignItems='center'
						item
						xs={12}
						sm={6}
						sx={{ mt: 4 }}>
						<Typography variant='h4'>What we provide</Typography>
						<List>
							<ListItem>
								<Tick color='secondary' sx={{ mr: 1 }} />
								rem minima veniam qui? Exercitationem odit sed
								tempore ullam.
							</ListItem>
							<ListItem>
								<Tick color='secondary' sx={{ mr: 1 }} />
								repudiandae facilis alias velit, reprehenderit
								recusandae quibusdam. Atque, soluta odit nobis
								harum delectus similique a.
							</ListItem>
							<ListItem>
								<Tick color='secondary' sx={{ mr: 1 }} />
								rem minima veniam qui? Exercitationem odit sed
								tempore ullam.
							</ListItem>
							<ListItem>
								<Tick color='secondary' sx={{ mr: 1 }} />
								repudiandae facilis alias velit, reprehenderit
								recusandae quibusdam. Atque, soluta odit nobis
								harum delectus similique a.
							</ListItem>
						</List>
						<Button
							sx={{ ml: 5, mt: 1, width: '130px' }}
							variant='contained'>
							Buy a car
						</Button>
					</Grid>
					<Grid item xs={12} sm={6} sx={{ mt: 8 }}>
						<img
							src='https://source.unsplash.com/AsWwQzyLSww'
							alt='random'
							width='100%'
							style={{
								objectFit: 'cover',
								height: '350px',
								borderRadius: '5px',
							}}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default About;

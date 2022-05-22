import Header from './components/Header'
import Footer from './components/Footer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import logo from '../img/logo.png'

const About = () => {
 	return  (
		<>
			
			<Header gradient="linear-gradient(to bottom, #E0F9FF, #FFFFFF);" />
			<Box sx={{ width: '100%', minHeight: '80vh'}}>
				<Box sx={{ height: '400px', backgroundColor: '#2b4743'}}>
					<Typography variant="h3" component="h2" sx={{ textAlign: 'center', paddingTop: '150px', color: 'white'}}>About Us</Typography>
				</Box>
				<Box sx={{ margin: '80px 40px'}}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6} sx={{textAlign: 'center', fontSize: '18px', padding: '0 50px'}}>
							<Typography variant="body1" component="h4">
								We are high school students that are interested in web design and software engineering.
								Our ambition prompted us to create a website which encapsulated our ideas on a quality student service app.
								While searching for app ideas for the student app themed hackathon, Lexhacks, the typical notion would be for the average student's daily life. 
								Although our immediate presumption for our website was quotidian-oriented, we faced trouble at the banality of it. 
								Our unconventional idea was realized because of our offbeat thinking. This idea catalyzed our website called "CU there"!. 
							</Typography>
							<img src={logo} alt="logo" style={{width: '300px', marginTop: '80px'}} />
						</Grid>
						<Grid item xs={12} sm={6} sx={{ textAlign: 'center', fontSize: '18px'}}>
							<Typography variant="h4" component="h2">Our Team</Typography>
							<Typography variant="h6" component="h2" sx={{ margin: '20px auto' }}>Steve Han - Web Developer</Typography>
							<Typography variant="h6" component="h2" sx={{ margin: '20px auto' }}>Jonah Qureshi - Designer and Producer</Typography>
							<Typography variant="h6" component="h2" sx={{ margin: '20px auto' }}>Lucas Yu - Web Developer</Typography>
							<Typography variant="h4" component="h2">Contact Us:</Typography>
							<Typography variant="h6" component="h2" sx={{ margin: '20px auto' }}>stevehan12138@gmail.com</Typography>
							<Typography variant="h6" component="h2" sx={{ margin: '20px auto' }}>Jonah.Qureshi@gmail.com</Typography>
							<Typography variant="h6" component="h2" sx={{ margin: '20px auto' }}>Lucas.Yu@gmail.com</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Footer />
		</>
  	)
}

export default About;
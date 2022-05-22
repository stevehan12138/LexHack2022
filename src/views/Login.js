import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Login = () => {

	const onLoginClickhandler = (e) => {
		e.preventDefault();
    	let username = e.target.username.value;
		localStorage.setItem('username', username);
		window.location.href = '/';
	}

	return (
		<>
			<Header />
			<Box sx={{ width: '60%', margin: '35px auto', height: '70vh' }}>
				<Box sx={{ width: '500px', height: '300px', margin: '30% auto', backgroundColor: '#B3C0A4', borderRadius: '5px'}}>
					<Typography variant="h4" component="h2" sx={{ textAlign: 'center', paddingTop: '50px', color: '#27233A'}}>Make a New Profile</Typography>
					<form noValidate onSubmit={onLoginClickhandler} style={{ display: 'grid', placeItems: 'center' }}>
						<TextField
							sx={{margin: '20px auto'}}
							variant="outlined"
							required
							id="username"
							label="Username"
							name="username"
						/>
						<Button
							sx={{textAlign: 'center'}}
							variant="contained"
							type="submit"
						>
							Submit
						</Button>
					</form>
				</Box>
			</Box>
			<Footer />
		</>
	)
}


export default Login; 
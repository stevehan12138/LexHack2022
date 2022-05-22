import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import logo from '../../img/logo3.png';
import { Typography } from '@mui/material';

export default function Header(props) {
    return (
        <>
            <AppBar position="static" color="default" sx={{background: props.gradient}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <img src={logo} alt="logo" width='85px' />
                    <Box display='flex' flexGrow={1} >
                        <MenuItem key="Home" sx={{ borderRadius: '7px', padding: '0' }}>
                            <Link href="/" sx={{ textDecoration: 'none', color: 'black', padding: '5px 15px'}}>Home</Link>
                        </MenuItem>
                        <MenuItem key="Schools" sx={{ borderRadius: '7px', padding: '0'}}>
                            <Link href="/schools" sx={{ textDecoration: 'none', color: 'black', padding: '5px 15px' }}>Schools</Link>
                        </MenuItem>
                        <MenuItem key="About Us" sx={{ borderRadius: '7px', padding: '0' }}>
                            <Link href="/about" sx={{ textDecoration: 'none', color: 'black', padding: '5px 15px' }}>About Us</Link>
                        </MenuItem>
                    </Box>
                    <Typography variant="body1" color="inherit" sx={{marginRight: '30px', fontSize: '18px'}}> Hi, {localStorage.getItem('username') !== null ? localStorage.getItem('username') : <Link href="/login" sx={{ textDecoration: 'none' }}>Login</Link> } </Typography>
                    <Button variant="outlined" href="/myschools">My Schools</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
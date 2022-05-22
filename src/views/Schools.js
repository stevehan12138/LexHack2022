import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Grid from '@mui/material/Grid';
import SchoolCard from './components/SchoolCard';
import MuiAlert from '@mui/material/Alert';
import { Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import SchoolsMetaData from './components/SchoolsMetaData';


export default function Schools() {

    const [snackBarOpen, setSnackBarOpen] = React.useState(false);
    const [snackBarMessage, setSnackBarMessage] = React.useState('');

    const handleClick = (message) => {
        setSnackBarMessage(message);
        setSnackBarOpen(true);
    };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return (
        <>
            <Header gradient="linear-gradient(to bottom, #E0F9FF, #FFFFFF);" />
            <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center', paddingTop: '30px', color: '#27233A'}}>Schools</Typography>
            <Grid container sx={{ margin: '35px auto', minHeight: '80vh', maxWidth: '80%'}} spacing={2}>
                {SchoolsMetaData.map((school, index) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <SchoolCard schoolName={school.schoolName} schoolAddress={school.address} schoolTuition={school.tuition} acceptanceRate={school.acceptanceRate} contact={school.contact} onSave={handleClick}/>
                        </Grid>
                    )
                })}
            </Grid>
            <Footer />
        </>
    )
}
import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import SchoolCard from './components/SchoolCard';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Paper from '@mui/material/Paper';

export default function Schools() {
    let schoolsStorage =  JSON.parse(localStorage.getItem('favorites'));
    if (schoolsStorage === null) {
        schoolsStorage = [];
    }

    const [schools, setSchools] = React.useState(schoolsStorage);

    const [snackBarOpen, setSnackBarOpen] = React.useState(false);
    const [snackBarMessage, setSnackBarMessage] = React.useState('');

    const handleClick = (message) => {
        setSchools(JSON.parse(localStorage.getItem('favorites')));
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
            <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
            <Header gradient="linear-gradient(to bottom, #E0F9FF, #FFFFFF);" />
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center', paddingTop: '30px', color: '#27233A'}}>My Favorite Schools</Typography>
            { schools.length === 0 ? <NoSchoolPaper /> : '' } 
            <Grid container sx={{ margin: '35px auto', minHeight: '80vh', maxWidth: '80%'}} spacing={2}>
                {schools.map((school, index) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <SchoolCard delete={true} schoolName={school.schoolName} schoolAddress={school.address} schoolTuition={school.tuition} acceptanceRate={school.acceptanceRate} contact={school.contact} onSave={handleClick}/>
                        </Grid>
                    )
                })}
            </Grid>
            <Footer />
        </>
    )
}

function NoSchoolPaper() {
    return (
        <Paper elevation={3} sx={{ padding: '20px 50px', margin: '50px auto', width: '50%', borderRadius: '5px'}}>
            No Favorite Schools
        </Paper>
    )
}
import * as React from 'react';
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import { Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from "./components/Footer";
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import SchoolsMetaData from './components/SchoolsMetaData';
import { CSVLink } from 'react-csv';

export default function School(){
    const { schoolName } = useParams();
    const school = SchoolsMetaData.find(school => school.schoolName === schoolName);

    const [snackBarOpen, setSnackBarOpen] = React.useState(false);
    const [snackBarMessage, setSnackBarMessage] = React.useState('');

    const handleClick = (message) => {
        let currentFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (currentFavorites === null) {
            currentFavorites = [];
        }
        if(currentFavorites.some(sch => sch.schoolName === school.schoolName)) {
            onFavoriteSave("School Already Exist");
        } else {
            currentFavorites.push({
                schoolName: school.schoolName,
                address: school.address,
                tuition: school.tuition,
                acceptanceRate: school.acceptanceRate,
                contact: school.contact,
            });
            localStorage.setItem('favorites', JSON.stringify(currentFavorites));
            onFavoriteSave("School Successfully Saved");
        }
    };

    const onFavoriteSave = (message) => {
        setSnackBarMessage(message);
        setSnackBarOpen(true);
    }
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    let csvData = [
        ['School Name', 'Address', 'Tuition', 'Acceptance Rate', 'Contact'],
        [school.schoolName, school.address, school.tuition, school.acceptanceRate, school.contact]
    ];

    return(
        <>
            <Header />
            <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
            <Paper sx={{ width: '70%', margin: '35px auto', borderRadius: '5px', backgroundColor: '#E7ECEF', padding: '20px 30px'}} elevation={3}>
                <Typography variant="h3" component="h2" sx={{ textAlign: 'center', padding:'30px 0'}}>{schoolName}</Typography>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                    <iframe title="map" width="600" height="450" frameBorder="0" style={{ margin: '0 auto' }} src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAC8QpQ7_cJiMW_ZtgIpVwkmh7tfNQ07CI&q=" + schoolName} />
                </div>
                <TableContainer component={Paper} sx={{ width: '50%', margin: '0 auto', padding: '30px 20px'}}>
                    <Table sx={{ width: '90%', margin: '0 auto'}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Data</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>School Name</TableCell>
                                <TableCell>{schoolName}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tuition</TableCell>
                                <TableCell>{school.tuition}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Acceptance Rate</TableCell>
                                <TableCell>{school.acceptanceRate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Location</TableCell>
                                <TableCell>{school.address}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', padding:'30px 0'}}>Contact Information</Typography>
                <Paper elevation={3} sx={{ width: '400px', margin: '0 auto', marginBottom: '20px', borderRadius: '5px', backgroundColor: '#272932', color: 'white'}}>
                    <Typography variant="h6" component="h2" sx={{ textAlign: 'center', padding:'30px 0'}}>phone: {school.contact}</Typography>
                </Paper>
                <Button size="big" onClick={handleClick} >Save As Favorite</Button>
                <Button size="big">
                    <CSVLink data={csvData} style={{ color: '#1976d2', textDecoration: 'none'}} filename={schoolName + ".csv"}>Download CSV</CSVLink>
                </Button>
            </Paper>
            <Footer />
        </>
    )
} 
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box sx={{ backgroundColor: '#0A3B5C', textAlign: 'center', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
            <Typography variant="h6" component="h2">CU There &copy; 2022</Typography>
        </Box>
    );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Schools(props) {

    const saveFavoriteOnCLick = () => {
        let currentFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (currentFavorites === null) {
            currentFavorites = [];
        }
        if(currentFavorites.some(school => school.schoolName === props.schoolName)) {
            props.onSave("School Already Exist");
        } else {
            currentFavorites.push({
                schoolName: props.schoolName,
                address: props.schoolAddress,
                tuition: props.schoolTuition,
                acceptanceRate: props.acceptanceRate,
                contact: props.contact,
            });
            localStorage.setItem('favorites', JSON.stringify(currentFavorites));
            props.onSave("School Successfully Saved");
        }
    }

    const deleteFavoriteOnCLick = () => {
        let currentFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (currentFavorites === null) {
            currentFavorites = [];
        }
        console.log(currentFavorites);
        console.log(props.schoolName);
        if(currentFavorites.some(school => school.schoolName === props.schoolName)) {
            currentFavorites = currentFavorites.filter(school => school.schoolName !== props.schoolName);
            localStorage.setItem('favorites', JSON.stringify(currentFavorites));
            props.onSave("School Successfully Deleted");
        } else {
            props.onSave("School Already Deleted");
        }
    }

    return (
        <Card sx={{ width: '100%', margin: 'auto 20px'}}>
            <CardContent>
                <Typography variant="h5" component="h2">{props.schoolName}</Typography>
                <Typography variant="body2" component="p">{props.schoolAddress}</Typography>
                <Typography variant="body2" component="p">{props.schoolTuition}</Typography>
                <Typography variant="body2" component="p">{props.acceptanceRate}</Typography>
            </CardContent>
            <CardActions>
                <Button size="big" href={"/schools/" + props.schoolName} >Learn More</Button>
                {
                    (props.delete)
                    ? <Button size="big" onClick={deleteFavoriteOnCLick}>Delete</Button> 
                    : <Button size="big" onClick={saveFavoriteOnCLick} >Save As Favorite</Button>
                }
            </CardActions>
        </Card>
    )
}
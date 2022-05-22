import Header from './components/Header'
import Footer from './components/Footer'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { ImageList } from '@mui/material'
import { ImageListItem } from '@mui/material'
import { Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DownloadingIcon from '@mui/icons-material/Downloading';
import SchoolIcon from '@mui/icons-material/School';
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const Home = () => {


    const itemData = [
        {
            img: 'https://ontariosuniversities.ca/wp-content/uploads/2018/12/UofT-Logo-1.png',
            title: 'UofT',
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/McGill_University_CoA.svg/1200px-McGill_University_CoA.svg.png',
            title: 'McGill',
        },
        {
            img: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/58c8017597bb19f7d11f6ba2cd6c183f',
            title: 'Seneca',
        },
        {
            img: 'https://etug.ca/wp-content/uploads/2014/03/ubc-e1523034593970.png',
            title: 'BC',
        },
        {
            img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112011/udem.png?itok=kuF74Nvb',
            title: 'Montreal',
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Algonquin_College_Coat_of_Arms.jpg',
            title: 'Algonquin',
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png',
            title: 'calgary',
        },
        {
            img: 'https://logodix.com/logo/1031106.png',
            title: 'alberta',
        },
        {
            img: 'https://www.seekpng.com/png/detail/841-8412607_universal-music-group-logo-logo-carleton-university.png',
            title: 'carleton',
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/1200px-University_of_Waterloo_seal.svg.png',
            title: 'Waterloo',
        },
        {
            img: 'https://play-lh.googleusercontent.com/nLbFDgKv0yrjLf2_6ihY0Ko76X6W7yBrGatIoRQY0sJQCzoE_Sho-DUEObh0lfbkNHv7',
            title: 'Centennial',
        },
        {
            img: 'https://concordiabootcamps.ca/wp-content/uploads/2019/03/icon.png',
            title: 'Concordia',
        },

    ];
    return (
        <>
           <Header gradient="linear-gradient(to bottom, #E0F9FF, #FFFFFF);" />

            <Box>
                <Grid container >
                    <Grid item sm={40}>
                        <Box sx={{
                            width: '100%',
                            height: '500px',
                            textAlign: "center",
                            backgroundColor: '#2b4743',
                            margin: "0 auto"
                        }}
                        >
                            <img alt="logo" src="https://cdn.discordapp.com/attachments/967558937379495998/977692705960370267/unknown.png" >
                            </img>
                            <Typography className="text-container" variant="h2" component="h1" sx={{ textAlign: "auto", margin: "0 auto" }}>

                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ textAlign: 'center', fontSize: '18px'}}>
                    <br />
                    <Typography variant="h4" component="h2"><CheckBoxSharpIcon/>  Our Goal  </Typography>
                    <br />
                    <Typography variant="body1" component="h2" sx={{ textAlign: 'center', fontSize: '18px', padding: '0 50px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: "20px" }}>CU There</span> aims for our users to discover familiar or foreign universities to help them keep track <br />
                        of their preferences in universities. <span style={{ fontWeight: 'bold', fontSize: "20px" }}>CU There</span> is a great tool to help students graduating secondary school <br />
                        to gauge their budget for schools affordable or comfortable for them.
                        <br />
                        <br />
                        <br />
                        <br />
                    </Typography>
                </Grid>
                <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
                    <br />
                    <AutoAwesomeIcon/> Features:
                    <br />
                </Typography>
                <Grid container sx={{ margin: '35px auto', maxWidth: '60%'}} spacing={2}>
                    <Grid item sm={12} md={4}>
                    <Card sx={{ width: '300px', margin: 'auto 30px'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Find Your University <SearchIcon />
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Find information about your dream university.
                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item sm={12} md={4}>
                    <Card sx={{ width: '300px', margin: 'auto 30px'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Save Your Favorites <CheckCircleOutlineIcon />
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                You can save your favorite universities to compare them later.
                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item sm={12} md={4}>
                    <Card sx={{ width: '300px', margin: 'auto 30px'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Download Your Data <DownloadingIcon />
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                You can download your data to use it in your own project.
                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
                
                <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
                    <br />
                    <br />
                    <br />
                    <SchoolIcon/> Schools:
                    <br />
                    <br />
                </Typography>
                <ImageList sx={{ width: 700, height: 800, margin: "0 auto" }} cols={4} rowHeight={60}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                
                <Paper elevation={3} sx={{ padding: '20px 30px', width: '400px', margin: '50px auto', textAlign: 'center'}}>
                    <Typography variant="h5" component="h2">
                        Source Code: <Link href="https://github.com/stevehan12138/LexHack2022" target="_blank">GitHub</Link>
                    </Typography>
                </Paper>
            </Box>
            <Footer />
        </>
    );
}

export default Home; 

import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import styleMain from './styles';

const cards = [1,2,3,4,5,6,7,8,9];

const App = () => {
    const classes = styleMain();

    return(
        <div>
            <>
                <CssBaseline />
                <AppBar position='relative'>
                    <Toolbar>
                        <PhotoCamera className={classes.headerLogo}/>
                        <Typography variant="h6" className={classes.headerTitle}> App Test </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div className={classes.container}>
                        <Container maxWidth="md" >
                            <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
                                Photo Album
                            </Typography>
                            <Typography variant="h6" color="textSecondary" align="center" paragraph>
                                This paragraph contains a discrete description of all the content that will be found on this webpage. Although it is just a mere test, it deserves a brief description of its own for it to be able to shine and be considered a success.
                            </Typography>
                            <div className={classes.buttonClass}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">Primary Action</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="secondary">Secondary Action</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <div>
                        <Container className = {classes.cardGrid} maxWidth="md">
                            <Grid container spacing={4} alignItems="center" justifyContent="center">
                                {cards.map(() => (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card className={classes.mainCard}>
                                        <CardMedia className={classes.cardMedia} image="https://www.pngitem.com/pimgs/m/198-1982524_transparent-anime-christmas-hat-png-padoru-padoru-gif.png" title="Image Title"/>
                                        <CardContent className={classes.cardContent}>
                                            <Typography variant="h5" align="center" gutterBottom>
                                                Card Heading
                                            </Typography>
                                            <Typography paragraph>
                                                Card Content goes here.
                                            </Typography>
                                        </CardContent>
                                        <CardActions className={classes.cardActions}>
                                            <Button variant="outlined" size="small" color="primary" className={classes.actionButton}> View </Button>
                                            <Button variant="outlined" size="small" color="secondary" className={classes.actionButton}> Edit </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </div>
                </main>
                <footer className= {classes.footer} align="center" gutterBottom>
                    <Typography variant="subtitle1">
                        Powered by <a href="https://www.atechsol.net">Aniqa Tech Solutions ©</a>, all rights reserved.
                    </Typography>
                </footer>
            </>
        </div>
    );
}


export default App;
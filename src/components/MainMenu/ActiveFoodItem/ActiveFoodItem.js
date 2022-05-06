import React from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import './ActiveFoodItem.css';
import { Flip } from 'react-reveal';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { NavLink } from 'react-router-dom';

const ActiveFoodItem = ({ activeFoodData }) => {

    return (
        activeFoodData.map(foodItem => {
            const { name, image, briefInfo, price, _id } = foodItem;
            return (
                <Grid item key={_id} sm={4} md={3} className="main-menu-card-body">
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardActionArea>
                            <Box sx={{ overflow: 'hidden' }}>
                                <CardMedia
                                    sx={{
                                        transition: 'all 800ms',
                                        '&:hover': {
                                            transform: 'scale(1.2)'
                                        }
                                    }}
                                    component="img"
                                    image={image}
                                    alt=""
                                />
                            </Box>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <Rating name="no-value" value={null} />
                                    </div>
                                    <div>
                                        <FavoriteIcon sx={{ color: 'lightgray', '&:hover': { color: 'red' } }} />
                                    </div>
                                </Box>
                                <Typography gutterBottom variant="h5" component="div">
                                    <NavLink className='main-menu-card-title' to={`/product-details/${_id}`}>
                                        {name}
                                    </NavLink>
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {briefInfo}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Button
                                    sx={{
                                        fontFamily: 'Oswald, sans-serif',
                                        backgroundColor: '#642F21',
                                        color: '#F7BE27',
                                        fontWeight: '600',
                                        '&:hover': {
                                            backgroundColor: '#56423D'
                                        }
                                    }}
                                >
                                    $ {price}
                                </Button>
                                <Box className="main-menu-cart-button">
                                    <Flip left>
                                        <Button sx={{ fontFamily: 'Oswald, sans-serif', backgroundColor: '#FFCA2C', color: 'black' }}><ShoppingBagOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }} /> Add to cart</Button>
                                    </Flip>
                                </Box>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
            );
        })
    );
};

export default ActiveFoodItem;
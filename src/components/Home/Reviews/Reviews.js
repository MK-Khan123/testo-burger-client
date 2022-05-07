import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Autoplay, Pagination, Navigation } from "swiper";
import Rating from '@mui/material/Rating';
import './Reviews.css';
import { Box } from '@mui/material';

const Reviews = () => {
    const reviewBackground = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786144/testo-burger-project/reviews/reviews_s7tyat.jpg';

    const images = {
        review1: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/reviews/review1_sgjcmb.jpg',
        review2: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/reviews/review2_hvb8a7.jpg',
        review3: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/reviews/review3_nufyyg.jpg',
        review4: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1649786143/testo-burger-project/reviews/review4_hc1rtt.jpg'
    };

    return (
        <section id='reviews'>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Autoplay, Pagination, Navigation]}
                className="mySwiper" id='reviewDiv'
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        "backgroundImage":
                            `url(${reviewBackground})`,
                    }}
                    data-swiper-parallax="-23%"
                ></div>

                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        <img className='review-image' src={images.review1} alt="" />
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec.
                        </p>
                    </div>
                    <Box sx={{ marginTop: '10px' }}>
                        <Rating name="read-only" value={5} readOnly />
                    </Box>
                    <Box component='h4' sx={{ textTransform: 'uppercase', marginTop: '10px' }}>By Sean McMarthy</Box>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        <img className='review-image' src={images.review2} alt="" />
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec.
                        </p>
                    </div>
                    <Box sx={{ marginTop: '10px' }}>
                        <Rating name="read-only" value={5} readOnly />
                    </Box>
                    <Box component='h4' sx={{ textTransform: 'uppercase', marginTop: '10px' }}>By Evelyn Martinez</Box>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        <img className='review-image' src={images.review3} alt="" />
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec.
                        </p>
                    </div>
                    <Box sx={{ marginTop: '10px' }}>
                        <Rating name="read-only" value={5} readOnly />
                    </Box>
                    <Box component='h4' sx={{ textTransform: 'uppercase', marginTop: '10px' }}>By Robert Peterson</Box>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        <img className='review-image' src={images.review4} alt="" />
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec.
                        </p>
                    </div>
                    <Box sx={{ marginTop: '10px' }}>
                        <Rating name="read-only" value={5} readOnly />
                    </Box>
                    <Box component='h4' sx={{ textTransform: 'uppercase', marginTop: '10px' }}>By Leslie Serpas</Box>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Reviews;
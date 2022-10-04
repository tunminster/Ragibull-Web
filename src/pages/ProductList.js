import React, { useState } from 'react';
import CustomerHeader from 'components/layout/CustomerHeader';
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import 'sass/ProductList.scss'
import ProductFilter from 'components/ProductFilter';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import catImg1 from 'assets/images/category-img1.jpg';
import catImg2 from 'assets/images/category-img2.jpg';
import catImg3 from 'assets/images/category-img3.jpg';
import catImg4 from 'assets/images/category-img4.jpg';
import featureImg1 from 'assets/images/feature-img1.jpg';
import featureImg2 from 'assets/images/feature-img2.jpg';
import featureImg3 from 'assets/images/feature-img3.jpg';
import featureImg4 from 'assets/images/feature-img4.jpg';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Geocode from "react-geocode";
import { useEffect } from 'react';
import { API } from 'api/API';
import { useAuthContext } from 'context/AuthContext/AuthContext';


const categoryData = [
    {
        id: 1,
        img: catImg1,
        name: 'Chinese',
    },
    {
        id: 2,
        img: catImg2,
        name: 'Italian',
    },
    {
        id: 3,
        img: catImg3,
        name: 'Breakfast',
    },
    {
        id: 4,
        img: catImg4,
        name: 'Healthy',
    },
    {
        id: 5,
        img: catImg2,
        name: 'Italian',
    },
]

const featureData = [
    {
        id: 1,
        img: featureImg1,
        title: 'Pittagoras - Greek Gyros & Souvlaki',
        rating: '4.5 Excellent',
        ratingNo: 500,
        away: '1.6 miles away',
        delivery: '$20.00 delivery',
        time: '30 - 45',
    },
    {
        id: 2,
        img: featureImg2,
        title: 'Pittagoras - Greek Gyros & Souvlaki',
        rating: '4.5 Excellent',
        ratingNo: 500,
        away: '1.6 miles away',
        delivery: '$20.00 delivery',
        time: '30 - 45',
    },
    {
        id: 3,
        img: featureImg3,
        title: 'Pittagoras - Greek Gyros & Souvlaki',
        rating: '4.5 Excellent',
        ratingNo: 500,
        away: '1.6 miles away',
        delivery: '$20.00 delivery',
        time: '30 - 45',
    },
    {
        id: 4,
        img: featureImg4,
        title: 'Pittagoras - Greek Gyros & Souvlaki',
        rating: '4.5 Excellent',
        ratingNo: 500,
        away: '1.6 miles away',
        delivery: '$20.00 delivery',
        time: '30 - 45',
    },
    {
        id: 5,
        img: featureImg2,
        title: 'Pittagoras - Greek Gyros & Souvlaki',
        rating: '4.5 Excellent',
        ratingNo: 500,
        away: '1.6 miles away',
        delivery: '$20.00 delivery',
        time: '30 - 45',
    },
]

const ProductList = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [isLoading, setIsLoading] = useState(false)

    const authContext = useAuthContext()
    const { token } = authContext

    const categoryFun = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const featureFun = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    const [userLocation, setUserLocation] = useState({
        searchQuery: '',
        latitude: null,
        longitude: null,
        page: 1,
        pageSize: 20
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setUserLocation(prevState => ({
                ...prevState,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,

            }))
            // getDataFromAMap();
        });
    }, []);

    useEffect(() => {
        // getDataFromAMap();
    }, [userLocation]);


    useEffect(() => {
        console.log('user location', userLocation);
        if (userLocation?.latitude && userLocation?.longitude) {
            setOpen(true)
            // searchByLocation()  

        }
    }, [userLocation]);

    // console.log("key", process.env.REACT_APP_GOOGLE_MAP_API_KEY);

    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
    // console.log('location',..props.coords);

    // set response language. Defaults to english.
    Geocode.setLanguage("en");

    Geocode.enableDebug();

    const getDataFromAMap = () => {
        Geocode.fromLatLng(userLocation.latitude, userLocation.longitude).then(
            (response) => {
                console.log({ response });
                const address1 = response.results[0].address_components[0].short_name;
                const address2 = response.results[0].address_components[1].long_name;
                let city, state, country, postelCode;
                for (
                    let i = 0;
                    i < response.results[0].address_components.length;
                    i++
                ) {
                    for (
                        let j = 0;
                        j < response.results[0].address_components[i].types.length;
                        j++
                    ) {
                        switch (response.results[0].address_components[i].types[j]) {
                            case "locality":
                                city = response.results[0].address_components[i].long_name;
                                break;
                            case "administrative_area_level_1":
                                state = response.results[0].address_components[i].long_name;
                                break;
                            case "country":
                                country = response.results[0].address_components[i].long_name;
                                break;
                            case "postal_code":
                                postelCode =
                                    response.results[0].address_components[i].long_name;
                                break;
                        }
                    }
                }
                let tempData = {
                    addressLine1: address1,
                    addressLine2: address2,
                    city: city,
                    county: state,
                    // country: country,
                    postalCode: postelCode,
                };
            },
            (error) => {
                console.error(error);
            }
        );
    };





    const searchByLocation = async () => {
        try {
            const response = await API.getDataByLocation(token, userLocation)
            console.log(response);
            if (response) {
                alert("Success")

            }
            else {
                alert("Error")
            }
        }
        catch (e) {
            console.error(e);
            alert("Network Error")

        }
        finally {
            setIsLoading(false)
            setOpen(false)

        }
    }


    const onLocatioChange=(value)=>{
        setUserLocation(prevState => ({
            ...prevState,
            searchQuery: value,
        }))
    }

    const onSubmitLocation=()=>{
        searchByLocation()
    }


    return (
        <React.Fragment>
            <CustomerHeader customClass="customerSearchHeader" />
            <Grid className='productList'>
                <Grid className="container">
                    <Grid className='row'>
                        <Box className='productList__filter'>
                            <ProductFilter />
                        </Box>
                        <Box className='productList__list'>
                            {/* Category Slider */}
                            <Grid className='products'>
                                <Typography variant={'h2'} className="products__title">Delivering to Wimbledon Park and South Wimbledon</Typography>
                                <Grid className='slider'>
                                    <Slider {...categoryFun}>
                                        {categoryData.map(item => (
                                            <Box className='item' key={item.id}>
                                                <img src={item.img} alt={item.name} />
                                                <h3>{item.name}</h3>
                                            </Box>
                                        ))}
                                    </Slider>
                                </Grid>
                            </Grid>

                            {/* Featured Slider */}
                            <Grid className='products'>
                                <Typography variant={'h2'} className="products__title">
                                    Featured
                                    <Typography variant="span">Paid placements from our partners</Typography>
                                </Typography>
                                <Grid className='slider feature'>
                                    <Slider {...featureFun}>
                                        {featureData.map(item => (
                                            <Box className='item' key={item.id}>
                                                <Link to="/product-detail">
                                                    <Box className='cover'>
                                                        <img src={item.img} alt={item.name} />
                                                        <Box className='text'>
                                                            <span className='time'>
                                                                {item.time}
                                                                <i>min</i>
                                                            </span>
                                                            <h4>{item.title}</h4>
                                                            <span className="rating">
                                                                <FaStar /> {item.rating} <i>({item.ratingNo}+)</i>
                                                            </span>
                                                            <ul>
                                                                <li>{item.away}</li>
                                                                <li>{item.delivery}</li>
                                                            </ul>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        ))}
                                    </Slider>
                                </Grid>
                            </Grid>

                            {/* Offer Slider */}
                            <Grid className='products'>
                                <Typography variant={'h2'} className="products__title">
                                    Offer near you
                                    <Link to="/">View all (24)</Link>
                                </Typography>
                                <Grid className='slider feature'>
                                    <Slider {...featureFun}>
                                        {featureData.map(item => (
                                            <Box className='item' key={item.id}>
                                                <Link to="/product-detail">
                                                    <Box className='cover'>
                                                        <img src={item.img} alt={item.name} />
                                                        <Box className='text'>
                                                            <span className='time'>
                                                                {item.time}
                                                                <i>min</i>
                                                            </span>
                                                            <h4>{item.title}</h4>
                                                            <span className="rating">
                                                                <FaStar /> {item.rating} <i>({item.ratingNo}+)</i>
                                                            </span>
                                                            <ul>
                                                                <li>{item.away}</li>
                                                                <li>{item.delivery}</li>
                                                            </ul>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        ))}
                                    </Slider>
                                </Grid>
                            </Grid>

                            {/* In the spotlight Slider */}
                            <Grid className='products'>
                                <Typography variant={'h2'} className="products__title">
                                    In the spotlight
                                </Typography>
                                <Grid className='slider feature'>
                                    <Slider {...featureFun}>
                                        {featureData.map(item => (
                                            <Box className='item' key={item.id}>
                                                <Link to="/product-detail">
                                                    <Box className='cover'>
                                                        <img src={item.img} alt={item.name} />
                                                        <Box className='text'>
                                                            <span className='time'>
                                                                {item.time}
                                                                <i>min</i>
                                                            </span>
                                                            <h4>{item.title}</h4>
                                                            <span className="rating">
                                                                <FaStar /> {item.rating} <i>({item.ratingNo}+)</i>
                                                            </span>
                                                            <ul>
                                                                <li>{item.away}</li>
                                                                <li>{item.delivery}</li>
                                                            </ul>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        ))}
                                    </Slider>
                                </Grid>
                            </Grid>

                            {/* Only on Ragibull Slider */}
                            <Grid className='products'>
                                <Typography variant={'h2'} className="products__title">
                                    Only on Ragibull <Link to="/">View all (24)</Link>
                                </Typography>
                                <Grid className='slider feature'>
                                    <Slider {...featureFun}>
                                        {featureData.map(item => (
                                            <Box className='item' key={item.id}>
                                                <Link to="/product-detail">
                                                    <Box className='cover'>
                                                        <img src={item.img} alt={item.name} />
                                                        <Box className='text'>
                                                            <span className='time'>
                                                                {item.time}
                                                                <i>min</i>
                                                            </span>
                                                            <h4>{item.title}</h4>
                                                            <span className="rating">
                                                                <FaStar /> {item.rating} <i>({item.ratingNo}+)</i>
                                                            </span>
                                                            <ul>
                                                                <li>{item.away}</li>
                                                                <li>{item.delivery}</li>
                                                            </ul>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        ))}
                                    </Slider>
                                </Grid>
                            </Grid>

                            {/* Delivery starting from Slider */}
                            <Grid className='products'>
                                <Typography variant={'h2'} className="products__title">
                                    Delivery starting from £0.99 <Link to="/">View all (79)</Link>
                                </Typography>
                                <Grid className='slider feature'>
                                    <Slider {...featureFun}>
                                        {featureData.map(item => (
                                            <Box className='item' key={item.id}>
                                                <Link to="/product-detail">
                                                    <Box className='cover'>
                                                        <img src={item.img} alt={item.name} />
                                                        <Box className='text'>
                                                            <span className='time'>
                                                                {item.time}
                                                                <i>min</i>
                                                            </span>
                                                            <h4>{item.title}</h4>
                                                            <span className="rating">
                                                                <FaStar /> {item.rating} <i>({item.ratingNo}+)</i>
                                                            </span>
                                                            <ul>
                                                                <li>{item.away}</li>
                                                                <li>{item.delivery}</li>
                                                            </ul>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        ))}
                                    </Slider>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal modal-add-cart"
            >
                <Box className="modal-dialog">
                    <Box className="modal-content">
                        <Box className="modal-body form-group">
                          
                                <label>Enter Location</label>
                                <input type={'text'} placeholder="Enter Your Location" className="form-control"  onChange={(e)=>onLocatioChange(e.target.value)}/>

    
                        </Box>
                        <Box className="modal-footer">

                            <Typography component={"div"} className="submit-btns">
                                
                                <Button variant="contained" className="" onClick={handleClose}>Close</Button>
                                <Button variant="contained" className="" onClick={onSubmitLocation}>Submit</Button>

                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </React.Fragment>
    )
}
export default ProductList;
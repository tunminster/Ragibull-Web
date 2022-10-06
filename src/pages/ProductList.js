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
import ButtonLoader from 'components/common/ButtonLoader';
import Autocomplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import ReactGoogleAutocomplete from 'react-google-autocomplete';



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
    const handleClose = () => {
        localStorage.removeItem("a")
        setOpen(false);
    }


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

    const [stores, setStores] = useState([])




    useEffect(() => {
        if (localStorage.getItem("a"))
            setOpen(true)
    }, []);

    const [value, setValue] = useState(null);

  



    // console.log("key", process.env.REACT_APP_GOOGLE_MAP_API_KEY);

    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
    // console.log('location',..props.coords);

    // set response language. Defaults to english.
    Geocode.setLanguage("en");

    Geocode.enableDebug();

   




    const searchByLocation = async () => {
        try {
            setIsLoading(true)
            const response = await API.getDataByLocation(token, userLocation)
            console.log(response);
            const data= response.data
            if (data?.length>0) {
                setStores([...data])
            }
            else {
                setStores([])

                alert("No Stores Near Your Location ")
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
  

    const onSubmitLocation = () => {
        localStorage.removeItem("a")
        searchByLocation()
    }

    useEffect(()=>{
console.log('location',value);
if(value!==null) 
onAddressSelected(value)
    },[value])

    const onAddressSelected = (value) => {
        console.log({value});
       

        Geocode.fromAddress(value.label).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);

                setUserLocation(prevState => ({
                    ...prevState,
                    latitude: lat,
                    longitude: lng,
                }))

            },
            (error) => {
                console.error(error);
            }
        );
    }


    return (
        <React.Fragment>
            <CustomerHeader customClass="customerSearchHeader" />
            <Grid className='productList'>
                <Grid className="container">
                    <Grid className='row'>
                        <Box className='productList__filter'>
                            <ProductFilter currentLocation={value?.label} onChangeLocation={() => setOpen(true)} />
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
                                    <>
                                    {stores && stores?.length>0?
                                    <Slider {...featureFun}>
                                        {stores.map(item => (
                                            <Box className='item' key={item.storeId}>
                                                <Link to="/product-detail">
                                                    <Box className='cover'>
                                                        <img src={item.imageUri} alt={item.storeName} />
                                                        <Box className='text'>
                                                            <span className='time'>
                                                                {item.time || '30-45'}
                                                                <i>min</i>
                                                            </span>
                                                            <h4>{item.storeName || 'Test'}</h4>
                                                            <span className="rating">
                                                                <FaStar /> {0} <i>({}+)</i>
                                                            </span>
                                                            <ul>
                                                                <li>{item?.distance?.toFixed() + " " +'miles away'}</li>
                                                                <li>{item.delivery}</li>
                                                            </ul>
                                                        </Box>
                                                    </Box>
                                                </Link>
                                            </Box>
                                        ))}
                                    </Slider>
                                    : 
                                    
                                    <Box  sx={{
                                        display:'flex',
                                        justifyContent:'center'
                                     }}>
                                        
                                        <Typography component={'p'} className="nodata">
                                        No Stores found
                                        </Typography>
                                    </Box>}
                                    </>
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
                            <GooglePlacesAutocomplete
                                apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
                                selectProps={{
                                    isClearable: true,
                                    value,
                                    onChange: setValue,
                                    
                                    // inputValue:{value}
                                }}



                            />

                        </Box>
                        <Box className="modal-footer">

                            <Typography component={"div"} className="submit-btns">

                                <Button variant="contained" className="" onClick={handleClose}>Close</Button>

                                {isLoading ?
                                    <ButtonLoader type="loader" /> :
                                    <Button variant="contained" className="" onClick={onSubmitLocation}>Submit</Button>}

                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </React.Fragment>
    )
}
export default ProductList;
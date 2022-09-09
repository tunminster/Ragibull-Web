import React from 'react';
import CustomerLoginHeader from '../components/layout/CustomerLoginHeader';
import { Box, Grid, Typography } from '@mui/material';
import OrderFilter from '../components/forms/OrderFilter';
import serImg1 from 'assets/images/servicebox-img1.jpg';
import serImg2 from 'assets/images/servicebox-img2.jpg';
import serImg3 from 'assets/images/servicebox-img3.jpg';
import '../sass/CustomerHome.scss'

const servicebox = [
    {
        id: 1,
        img: serImg1,
        title: 'Feed Your Employees',
        text: 'Create a business account',
    },
    {
        id: 2,
        img: serImg2,
        title: 'Your Restaurant - Delivered',
        text: 'Add your restaurant',
    },
    {
        id: 3,
        img: serImg3,
        title: 'Deliver With Ragibull',
        text: 'Sign up to deliver',
    },
];

const cities = [
    {
        id: 1,
        city: 'Aberdeen',
    },
    {
        id: 2,
        city: 'Edinburgh',
    },
    {
        id: 3,
        city: 'Aberdeen',
    },
    {
        id: 4,
        city: 'Edinburgh',
    },
    {
        id: 5,
        city: 'Belfast',
    },
    {
        id: 6,
        city: 'Glasgow',
    },
    {
        id: 7,
        city: 'Belfast',
    },
    {
        id: 8,
        city: 'Glasgow',
    },
    {
        id: 9,
        city: 'Birmingham, UK',
    },
    {
        id: 10,
        city: 'Hull',
    },
    {
        id: 11,
        city: 'Birmingham, UK',
    },
    {
        id: 12,
        city: 'Hull',
    },
    {
        id: 13,
        city: 'Brighton and Sussex',
    },
    {
        id: 14,
        city: 'Leeds',
    },
    {
        id: 15,
        city: 'Brighton and Sussex',
    },
    {
        id: 16,
        city: 'Leeds',
    },
    {
        id: 17,
        city: 'Cambridge and East Anglia',
    },
    {
        id: 18,
        city: 'Leicester',
    },
    {
        id: 19,
        city: 'Cambridge and East Anglia',
    },
    {
        id: 20,
        city: 'Leicester',
    },
    {
        id: 21,
        city: 'Cardiff',
    },
    {
        id: 22,
        city: 'London',
    },
    {
        id: 23,
        city: 'Cardiff',
    },
    {
        id: 24,
        city: 'London',
    },
]

const CustomerHome = () => {
    return (
        <React.Fragment>
            <CustomerLoginHeader customClass="customerHeader" />
            <Grid className='filterBanner' sx={{ pt: '100px' }}>
                <Grid className='container'>
                    <Typography component={'h2'}>Order Food To Your Door</Typography>
                    <Typography component={'p'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    <OrderFilter />
                </Grid>
            </Grid>

            <Grid className="serviceBox">
                <Grid className="container">
                    <Box className="row">
                        {servicebox.map(item => (
                        <Box className="box" key={item.id}>
                            <img src={item.img} alt="" />
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>

            <Grid className="cities">
                <Grid className="container">
                    <h2>Cities near me <span>(View all 500+ cities)</span></h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.17073759311!2d-122.5076403643906!3d37.757679275407455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1662720763645!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <ul>
                        {cities.map(item => (
                        <li key={item.id}>{item.city}</li>
                        ))}
                    </ul>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}
export default CustomerHome;
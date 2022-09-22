import React, { useState } from "react";
import CustomerHeader from "components/layout/CustomerHeader";
import "sass/ProductOrder.scss";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import addressIcon from 'assets/images/scooter-icon.png';
import orderImg from 'assets/images/order-left-img1.jpg';
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

const orderList = [
  {
    id: 1,
    img: orderImg,
    name: 'Rosy Lea Cafe - Mordern',
    time: 'Delivery in 30 - 35 minutes',
    category: 'Chicken',
    foodType: 'Breakfast',
    price: '$95.00',
    offPrice: '16% Off',
    rating: '4.5 Excellent',
    ratingPlus: '(500+)',
    ratingMsg: '1.50 miles away·Closes at 23:59·£10.00 minimum·£0.99 delivery·',
  },
  {
    id: 2,
    img: orderImg,
    name: 'Rosy Lea Cafe - Mordern',
    time: 'Delivery in 30 - 35 minutes',
    category: 'Chicken',
    foodType: 'Breakfast',
    price: '$95.00',
    offPrice: '16% Off',
    rating: '4.5 Excellent',
    ratingPlus: '(500+)',
    ratingMsg: '1.50 miles away·Closes at 23:59·£10.00 minimum·£0.99 delivery·',
  },
  {
    id: 3,
    img: orderImg,
    name: 'Rosy Lea Cafe - Mordern',
    time: 'Delivery in 30 - 35 minutes',
    category: 'Chicken',
    foodType: 'Breakfast',
    price: '$95.00',
    offPrice: '16% Off',
    rating: '4.5 Excellent',
    ratingPlus: '(500+)',
    ratingMsg: '1.50 miles away·Closes at 23:59·£10.00 minimum·£0.99 delivery·',
  },
  {
    id: 4,
    img: orderImg,
    name: 'Rosy Lea Cafe - Mordern',
    time: 'Delivery in 30 - 35 minutes',
    category: 'Chicken',
    foodType: 'Breakfast',
    price: '$95.00',
    offPrice: '16% Off',
    rating: '4.5 Excellent',
    ratingPlus: '(500+)',
    ratingMsg: '1.50 miles away·Closes at 23:59·£10.00 minimum·£0.99 delivery·',
  },
]

const orderCartList = [
  {
    id: 1,
    name: 'Sparkling Water Glass Bottle',
    qty: 1,
    price: '7.50',
  },
  {
    id: 2,
    name: 'Fanta Original Taste Glass Bottle',
    qty: 1,
    price: '7.50',
  },
  {
    id: 3,
    name: 'J20 Apple & Mango Glass Bottle',
    qty: 1,
    price: '7.50',
  },
  {
    id: 5,
    name: 'Sparkling Water Glass Bottle',
    qty: 1,
    price: '7.50',
  },
]

const ProductOrders = () => {
  const [orderCart, setOrderCart] = useState(orderCartList);

  const onMinus = (item) => {
    // let itemArry = [];
    // itemArry = orderCartList.map(data => {
    //   if(data.id === item.id){
    //     data.qty + 1 
    //   }
    //   setOrderCart(...itemArry)
    // })
    // if(item.qty > 1) {
    //     setQtyValue(qtyValue - 1)
    // }
  }
  const onPlus = (item) => {
    // let itemArry = [];
    // itemArry = orderCartList.map(data => {
    //   if(data.id === item.id){
    //     data.qty = data.qty + 1
    //   }
    //   setOrderCart(...itemArry)
    // })
    // setQtyValue(item.qty + 1)
    // if(qtyValue < 10) {
    // }
    // setPrice(price * qtyValue)

  }

  return (
    <React.Fragment>
      <CustomerHeader customClass="customerSearchHeader" />
      <Grid className="productOrder">
        <Grid className="container">
          <Grid className="productOrder__title">
            <Typography component="h2" className="title">Order Summary</Typography>
            <Box className="address">
              <img src={addressIcon} alt="" />
              <Box className="address__right">
                <Typography component="address">
                  Wimbledon Park and...
                </Typography>
                <Button variant="text">Changes</Button>
              </Box>
            </Box>
          </Grid>
          <Box className="productOrder__list">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={7} lg={8}>
                {orderList.map((item) => (
                <Grid className="item" key={item.id}>
                  <Box className="item__img">
                    <img src={item.img} alt={item.name} />
                  </Box>
                  <Box className="item__text">
                    <Box className="title">
                      <Typography component="h3">{item.name}</Typography>
                      <Typography component="span">{item.time}</Typography>
                    </Box>
                    <Typography component="ul" className="type">
                      <Typography component="li">
                        {item.category}
                      </Typography>
                      <Typography component="li">
                      {item.foodType}
                      </Typography>
                    </Typography>
                    <Typography component="span" className="price">{item.price} <i>{item.offPrice}</i></Typography>
                    <Typography component="ul" className="rating">
                      <Typography component="li">
                        <Typography component='span'><StarIcon />{item.rating}</Typography>
                        {item.ratingPlus}
                      </Typography>
                      <Typography component="li">
                      {item.ratingMsg}
                      </Typography>
                    </Typography>
                    <Box className="cta">
                      <Button variant="text">Delete</Button>
                      <Button variant="text">Save for later</Button>
                    </Box>
                  </Box>
                </Grid>
                ))}
              </Grid>
              <Grid item xs={12} sm={5} lg={4}>
                <Box className="productOrder__order">
                  <Box className="brd">
                    <Typography component="h4">Your Order</Typography>
                    <Typography component="ul" className="products">
                      {orderCart.map((item) => (
                      <Typography component="li" key={item.id}>
                        <Typography component="span" className="name">{item.name}</Typography>
                        <Box className="qty">
                            <IconButton className="qtyBtn prev" onClick={()=> onMinus(item)}>
                                <RemoveIcon />
                            </IconButton>
                            <input type={'number'} value={item.qty} readOnly />
                            <IconButton className="qtyBtn next" onClick={()=> onPlus(item)}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                        <Typography component="span" className="price">$ {item.price}</Typography>
                      </Typography>
                      ))}
                    </Typography>
                  </Box>
                  <Box className="brd">
                    <Typography component="ul" className="subtotal">
                      <Typography component="li">
                        <Typography component="span" className="title">
                          Subtotal <i>50% off (-£7.05)</i>
                        </Typography>
                        <Typography component="span" className="value">
                          $29.00
                        </Typography>
                      </Typography>
                      <Typography component="li">
                        <Typography component="span" className="title">
                          Delivery fee
                        </Typography>
                        <Typography component="span" className="value">
                          $15.00
                        </Typography>
                      </Typography>
                      <Typography component="li">
                        <Typography component="span" className="title">
                          Service fee
                        </Typography>
                        <Typography component="span" className="value">
                          $15.00
                        </Typography>
                      </Typography>
                    </Typography>
                    <Button variant="text" className="work">How fees work</Button>
                  </Box>
                  <Box className="brd">
                    <Typography component="ul" className="total">
                      <Typography component="li">Total</Typography>
                      <Typography component="li">$15.00</Typography>
                    </Typography>
                    <Link to="/product-order-payment">
                      <Button variant="contained" className="checkoutBtn">Go To Checkout</Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

    </React.Fragment>
  );
};

export default ProductOrders;

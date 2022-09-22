import React, { useState } from "react";
import CustomerHeader from "components/layout/CustomerHeader";
import "sass/ProductOrder.scss";
import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

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

const ProductOrderPayment = () => {
  const [orderCart, setOrderCart] = useState(orderCartList);
  const [address, setAddress] = useState();
  const [paymentCard, setPaymentCard] = useState();
  const [paypalCard, setPaypalCard] = useState();

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

  const onAddress = () => {
    setAddress(!address);
  }
  const onPaymentCard = () => {
    setPaymentCard(!paymentCard);
  }
  const onPaypalCard = () => {
    setPaypalCard(!paypalCard)
  }

  return (
    <React.Fragment>
      <CustomerHeader customClass="customerSearchHeader" />
      <Grid className="productOrder">
        <Grid className="container">
          <Grid className="productOrder__title">
            <Typography component="h2" className="title">Review your order from Morning Birds - Brick Lane</Typography>
          </Grid>
          <Box className="productOrder__list">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={7} lg={8}>
                {/* Add Delivery Address */}
                <Box className="productOrder__payment">
                  <Typography component="h5">Delivery Address</Typography>
                  <Button variant="outlined" onClick={onAddress} startIcon={<AddIcon />} className="addBtn">Add a new address</Button>
                  {address &&
                  <>
                    <Grid container spacing={3} className="form">
                      <Grid item xs={12} className="form__group">
                        <Typography component="label">Address</Typography>
                        <input type={'text'} placeholder="Address" className="form-control" />
                      </Grid>
                      <Grid item xs={12} className="form__group">
                        <Typography component="label">Address 2</Typography>
                        <input type={'text'} placeholder="Address 2" className="form-control" />
                      </Grid>
                      <Grid item xs={12} sm={6} className="form__group">
                        <Typography component="label">Country</Typography>
                        <input type={'text'} placeholder="Country" className="form-control" />
                      </Grid>
                      <Grid item xs={12} sm={6} className="form__group">
                        <Typography component="label">State/Province/Region</Typography>
                        <input type={'text'} placeholder="State/Province/Region" className="form-control" />
                      </Grid>
                      <Grid item xs={12} sm={6} className="form__group">
                        <Typography component="label">City/Town</Typography>
                        <input type={'text'} placeholder="City/Town" className="form-control" />
                      </Grid>
                      <Grid item xs={12} sm={6} className="form__group">
                        <Typography component="label">Zip/Postal Code</Typography>
                        <input type={'text'} placeholder="Zip/Postal Code" className="form-control" />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3} className="cta">
                      <Grid item xs={12} sm={6} className="form__group">
                        <Button variant="outlined" sx={{ width: '100%' }} onClick={onAddress}>Cancel</Button>
                      </Grid>
                      <Grid item xs={12} sm={6} className="form__group">
                        <Button variant="contained" sx={{ width: '100%' }}>Add Your Address</Button>
                      </Grid>
                    </Grid>
                  </>
                  }
                </Box>

                {/* Add Payment Card */}
                <Box className="productOrder__payment">
                  <Typography component="h5">Payment Method</Typography>
                  <Button variant="outlined" onClick={onPaymentCard} startIcon={<AddIcon />} className="addBtn">Add a new payment card</Button>
                  {paymentCard &&
                  <>
                    <Grid container spacing={3} className="form">
                      <Grid item xs={12} className="form__group">
                        <Typography component="label">Card Number</Typography>
                        <input type={'text'} placeholder="Card Number" className="form-control" />
                      </Grid>
                      <Grid item xs={12} sm={6} className="form__group">
                        <Typography component="label">Expiry Date</Typography>
                        <input type={'text'} placeholder="MM/YY" className="form-control" />
                      </Grid>
                      <Grid item xs={12} sm={6} className="form__group">
                        <Typography component="label">CVV Number</Typography>
                        <input type={'text'} placeholder="CVV" className="form-control" />
                      </Grid>
                      <Grid item xs={12} className="form__group">
                        <Typography component="label">Billing Post Code</Typography>
                        <input type={'text'} placeholder="e.g. EC4R 3XJ" className="form-control" />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3} className="cta">
                      <Grid item xs={12} sm={6} className="form__group">
                        <Button variant="outlined" sx={{ width: '100%' }} onClick={onPaymentCard}>Cancel</Button>
                      </Grid>
                      <Grid item xs={12} sm={6} className="form__group">
                        <Button variant="contained" sx={{ width: '100%' }}>Add Your Card</Button>
                      </Grid>
                    </Grid>
                  </>
                  }
                </Box>

                {/* Add Paypal Card */}
                <Box className="productOrder__payment">
                  <Typography component="h5">Payment Method</Typography>
                  <Button variant="outlined" onClick={onPaypalCard} startIcon={<AddIcon />} className="addBtn">Add a PayPal account</Button>
                  {paypalCard &&
                  <>
                    <Grid container spacing={3} className="form">
                      <Grid item xs={12} className="form__group">
                        <Typography component="label">Email Address</Typography>
                        <input type={'text'} placeholder="Email" className="form-control" />
                      </Grid>
                      <Grid item xs={12} className="form__group">
                        <Typography component="label">Passowrd</Typography>
                        <input type={'text'} placeholder="Passowrd" className="form-control" />
                      </Grid>
                      <Grid item xs={12} className="form__group">
                        <FormControlLabel control={<Checkbox />} label="Stay logged in for faster checkout" />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3} className="cta">
                      <Grid item xs={12} sm={6} className="form__group">
                        <Button variant="outlined" sx={{ width: '100%' }} onClick={onPaypalCard}>Cancel</Button>
                      </Grid>
                      <Grid item xs={12} sm={6} className="form__group">
                        <Button variant="contained" sx={{ width: '100%' }}>Log In</Button>
                      </Grid>
                    </Grid>
                  </>
                  }
                </Box>

                <Button variant="contained" className="placeBtn">Place Delivery Order</Button>
              </Grid>
              <Grid item xs={12} sm={5} lg={4}>
                <Box className="productOrder__order">
                  <Box className="brd">
                    <Typography component="h4">Your Order</Typography>
                    <Typography component="ul" className="products">
                      {orderCart.map((item) => (
                      <Typography component="li" key={item.id}>
                        <Typography component="span" className="name">{item.name}</Typography>
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
                          <del>$58.00</del><i>$29.00</i>
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

export default ProductOrderPayment;

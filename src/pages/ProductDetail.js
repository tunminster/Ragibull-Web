import React, { useState } from "react";
import CustomerHeader from "components/layout/CustomerHeader";
import "sass/ProductDetail.scss";
import { Box, Button, Grid, IconButton, Tab, Tabs, Typography } from "@mui/material";
import productImg1 from "assets/images/product-single-img1.jpg";
import productImg2 from "assets/images/product-single-img2.jpg";
import productImg3 from "assets/images/product-single-img3.jpg";
import productImg4 from "assets/images/product-single-img4.jpg";
import productImg5 from "assets/images/product-single-img5.jpg";
import galleryImg1 from "assets/images/gallery-img1.jpg";
import galleryImg2 from "assets/images/gallery-img2.jpg";
import galleryImg3 from "assets/images/gallery-img3.jpg";
import { FaStar } from "react-icons/fa";
import { BsCart2, BsShare, BsStar } from "react-icons/bs";
import { AiFillCaretDown, AiFillStar, AiOutlineLike } from "react-icons/ai";
import reviewImg from "assets/images/review-img.png";
import reviewProductImg from "assets/images/review-product-img.jpg";
import { BiCommentDetail, BiShare } from "react-icons/bi";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import Modal from '@mui/material/Modal';
import popupImg from 'assets/images/product-popup-img.jpg';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "context/AuthContext/AuthContext";
import { API } from "api/API";
import { useEffect } from "react";
import ScreenLoader from "components/common/ScreenLoader";

const review = [
  {
    id: 1,
    number: 318,
    text: "Dining Reviews",
    rating: 4.5,
  },
  {
    id: 2,
    number: 318,
    text: "Delivery Reviews",
    rating: 4.8,
  },
];

const reviewList = [
  {
    id: 1,
    img: reviewImg,
    name: "Coinneach Adelina",
    location: "San Francisco, United State",
    title: "Good Service",
    rating: "4.5",
    time: "2 days ago",
    text: "It was my first visit..Absolutely loved the place and the food was super delicious. The place was jam packed. I visited on weekend tried their Margherita pizza was good in taste and lively environment and vibe.",
    helpfull: 0,
    comment: 0,
    gallery: [
      {
        id: "1-1",
        img: reviewProductImg,
      },
      {
        id: "1-2",
        img: reviewProductImg,
      },
    ],
  },
  {
    id: 2,
    img: reviewImg,
    name: "Coinneach Adelina",
    location: "San Francisco, United State",
    title: "Good Service",
    rating: "4.5",
    time: "2 days ago",
    text: "It was my first visit..Absolutely loved the place and the food was super delicious. The place was jam packed. I visited on weekend tried their Margherita pizza was good in taste and lively environment and vibe.",
    helpfull: 0,
    comment: 0,
    gallery: [
      {
        id: "2-1",
        img: reviewProductImg,
      },
      {
        id: "2-2",
        img: reviewProductImg,
      },
    ],
  },
  {
    id: 3,
    img: reviewImg,
    name: "Coinneach Adelina",
    location: "San Francisco, United State",
    title: "Good Service",
    rating: "4.5",
    time: "2 days ago",
    text: "It was my first visit..Absolutely loved the place and the food was super delicious. The place was jam packed. I visited on weekend tried their Margherita pizza was good in taste and lively environment and vibe.",
    helpfull: 0,
    comment: 0,
    gallery: [
      {
        id: "3-1",
        img: reviewProductImg,
      },
      {
        id: "3-2",
        img: reviewProductImg,
      },
    ],
  },
];

const galleryBtns = [
  {
    id: 1,
    text: "All",
  },
  {
    id: 2,
    text: "Food",
  },
  {
    id: 3,
    text: "Drink",
  },
];

const photoGellery = [
  {
    id: 1,
    img: galleryImg1,
    type: "food",
  },
  {
    id: 2,
    img: galleryImg2,
    type: "food",
  },
  {
    id: 3,
    img: galleryImg3,
    type: "food",
  },
  {
    id: 4,
    img: galleryImg1,
    type: "drink",
  },
  {
    id: 5,
    img: galleryImg2,
    type: "drink",
  },
  {
    id: 6,
    img: galleryImg3,
    type: "drink",
  },
  {
    id: 7,
    img: galleryImg1,
    type: "drink",
  },
  {
    id: 8,
    img: galleryImg2,
    type: "food",
  },
  {
    id: 9,
    img: galleryImg3,
    type: "drink",
  },
];

// Tab Component
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductDetail = () => {

  const { id } = useParams()

  const authContext = useAuthContext()
  const { token } = authContext
  const [value, setValue] = React.useState(0);
  const [selected, setSelected] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [qtyValue, setQtyValue] = useState(1);
  const [price, setPrice] = useState(39);
  const [storeDetails, setStoreDetails] = useState(null)

  const [loading,setLoading]=useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterGallery = (id) => {
    setSelected((prevId) => {
      if (prevId === id) return id;
      return id;
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onMinus = () => {
    if (qtyValue > 1) {
      setQtyValue(qtyValue - 1)
    }
  }
  const onPlus = () => {
    setQtyValue(qtyValue + 1)
    // if(qtyValue < 10) {
    // }
    // setPrice(price * qtyValue)
  }

  useEffect(() => {
    if (token && id)
      getStoreDetails()
  }, [id])


  const getStoreDetails = async () => {
    try {
      const response = await API.getStoreDetails(id, token);
      if (response?.data) {
        const data = response.data
        setStoreDetails(data)
        console.log({ response });
      }
    }
    catch (e) {
      console.error(e);
    }
    finally {
      setLoading(false)
    }
  }


  return (
    <React.Fragment>
      <CustomerHeader customClass="customerSearchHeader" />
      {loading?<ScreenLoader/>:
      <Grid className="productDetail">
        <Grid className="container">
          <Box className="productDetail__gallery">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <img src={storeDetails?.imageUri} alt="" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <img src={productImg2} alt="" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <img src={productImg3} alt="" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <img src={productImg4} alt="" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <img src={productImg5} alt="" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box className="productDetail__info">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={7}>
                <Typography variant="h2">{storeDetails?.storeName}</Typography>
                <p>
                 { storeDetails?.storeCategoriesList[0]?.products &&  storeDetails?.storeCategoriesList[0]?.products?.map(product=>(
                  product?.productName
                 )).join(" , ")}
                </p>
                <Typography component="span" className="price">
                  $95.00 <small>16% Off</small>
                </Typography>
                <p>{storeDetails?.addressLine1}</p>
                <p>
                  <span>Open Now:</span>11:30am – 11pm (Today)
                </p>
              </Grid>
              <Grid item xs={12} sm={5}>
                <ul>
                  {review.map((item) => (
                    <li key={item.id}>
                      <span className="rating">
                        {item.rating} <FaStar />
                      </span>
                      <div className="text">
                        <span>{item.number}</span>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Box>
          <Box className="productDetail__cta">
            <ul>
              <li>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                  <BsCart2 /> Add To Cart
                </Button>
              </li>
              <li>
                <Button variant="outlined" color="primary">
                  <BsStar /> Add Review
                </Button>
              </li>
              <li>
                <Button variant="outlined" color="primary">
                  <BsShare /> Share
                </Button>
              </li>
            </ul>
          </Box>
          <Box className="productDetail__tabs">
            <Box sx={{ borderBottom: 2, borderColor: "#D9D9D9" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Overview" {...a11yProps(0)} />
                <Tab label="Reviews" {...a11yProps(1)} />
                <Tab label="Photos" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <Box className="tab-panel">
              <TabPanel value={value} index={0}>
                <Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid className="reviewList">
                  <Typography component={"h3"} className="reviewList__title">
                    Rosy Lea Cafe - Mordern Reviews
                  </Typography>
                  <Button variant="text" className="allReview">
                    All Reviews <AiFillCaretDown />
                  </Button>
                  {reviewList.map((item) => (
                    <Box className="reviewList__item" key={item.id}>
                      <Box className="profle">
                        <Box className="profle__img">
                          <img src={item.img} alt={item.name} />
                        </Box>
                        <Box className="profle__text">
                          <Typography component="h4">{item.name}</Typography>
                          <Typography component="address">
                            {item.location}
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="reviewTitle">
                        <Typography
                          component={"span"}
                          className="reviewTitle__rating"
                        >
                          {item.rating} <AiFillStar />
                        </Typography>
                        <Typography
                          component={"span"}
                          className="reviewTitle__title"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          component={"span"}
                          className="reviewTitle__time"
                        >
                          {item.time}
                        </Typography>
                      </Box>
                      <Typography component="p" className="commnet">
                        {item.text}
                      </Typography>
                      <Gallery>
                        <Grid container spacing={3} className="gellery">
                          {item.gallery.map((gallery) => (
                            <Grid item xs={6} sm={3} key={gallery.id}>
                              <Item
                                original={gallery.img}
                                thumbnail={gallery.img}
                                width="400"
                                height="250"
                              >
                                {({ ref, open }) => (
                                  <img
                                    ref={ref}
                                    onClick={open}
                                    src={gallery.img}
                                    alt=""
                                  />
                                )}
                              </Item>
                            </Grid>
                          ))}
                        </Grid>
                      </Gallery>
                      <Typography className="vot">
                        {item.helpfull} Votes for helpful, {item.comment}{" "}
                        Comments
                      </Typography>
                      <Typography component="ul" className="cta">
                        <Typography component="li">
                          <Button variant="text" startIcon={<AiOutlineLike />}>
                            Helpfull
                          </Button>
                        </Typography>
                        <Typography component="li">
                          <Button
                            variant="text"
                            startIcon={<BiCommentDetail />}
                          >
                            Commnet
                          </Button>
                        </Typography>
                        <Typography component="li">
                          <Button variant="text" startIcon={<BiShare />}>
                            Share
                          </Button>
                        </Typography>
                      </Typography>
                    </Box>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid className="reviewList">
                  <Typography component={"h3"} className="reviewList__title">
                    Rosy Lea Cafe - Mordern Photos
                  </Typography>
                  <Grid className="reviewList__gallery">
                    <Box className="filterBtn">
                      {galleryBtns.map((item) => (
                        <Button
                          onClick={() => filterGallery(item.id)}
                          variant="outlined"
                          className={selected === item.id ? "active" : ""}
                          key={item.id}
                        >
                          {item.text} {item.text === "All" && <>({photoGellery.length})</>}
                        </Button>
                      ))}
                    </Box>
                    <Gallery>
                      <Grid container spacing={3} className="gellery">
                        {photoGellery
                          .filter((g) => {
                            if (selected === 1) return true;
                            if (selected === 2 && g.type === "food") {
                              return true;
                            }

                            if (selected === 3 && g.type === "drink") {
                              return true;
                            }

                            return false;
                          })
                          .map((gallery) => (
                            <Grid item xs={6} sm={4} key={gallery.id}>
                              <Item
                                original={gallery.img}
                                thumbnail={gallery.img}
                                width="400"
                                height="250"
                              >
                                {({ ref, open }) => (
                                  <img
                                    ref={ref}
                                    onClick={open}
                                    src={gallery.img}
                                    alt=""
                                  />
                                )}
                              </Item>
                            </Grid>
                          ))}
                      </Grid>
                    </Gallery>
                    <Box sx={{ textAlign: 'center' }}>
                      <Button variant="contained" className="viewAllPhoto">View Basket</Button>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
            </Box>
          </Box>
        </Grid>
      </Grid>
}

      {/* Add To card modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal modal-add-cart"
      >
        <Box className="modal-dialog">
          <Box className="modal-content">
            <img src={popupImg} alt="Khichia & Chundo (Ve)" />
            <Box className="modal-body">
              <Typography
                id="modal-modal-title"
                variant="h6"
                className="title"
              >Khichia & Chundo (Ve)</Typography>
              <Typography component={'p'}>A fine, crispy snack, not unlike papad. Dip happily in the spiced chutney made to an old family recipe, from dependable apple, not fickle mango. (Vegan)</Typography>
              <ul>
                <li>393 kcal</li>
                <li>Contains mustard</li>
              </ul>
            </Box>
            <Box className="modal-footer">
              <Box className="qty">
                <IconButton className="qtyBtn" onClick={onMinus}>
                  <RemoveIcon />
                </IconButton>
                <input type={'number'} value={qtyValue} readOnly />
                <IconButton className="qtyBtn" onClick={onPlus}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Link to="/product-orders">
                <Button variant="contained" className="add" onClick={handleClose}>Add for $ {price}</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ProductDetail;

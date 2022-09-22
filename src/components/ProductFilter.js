import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import addIcon from 'assets/images/scooter-icon.png';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const deliverList = [
    {
        id: 1,
        name: 'Delivery',
    },
    {
        id: 2,
        name: 'Pickup',
    },
    {
        id: 3,
        name: 'Table Service',
    },
]
const sortList = [
    {
        id: 1,
        name: 'Distance'
    },
    {
        id: 2,
        name: 'Hygiene ratings'
    },
    {
        id: 3,
        name: 'Quickest delivery'
    },
    {
        id: 4,
        name: 'Recommended'
    },
    {
        id: 5,
        name: 'Top rated'
    },
]

const ratingList = [
    {
        id: 1,
        name: 'Hygiene rating: 5',
        number: 689,
    },
    {
        id: 2,
        name: 'Hygiene rating: 4',
        number: 234,
    },
    {
        id: 3,
        name: 'Hygiene rating: 3',
        number: 116,
    },
    {
        id: 4,
        name: 'Hygiene rating: 2',
        number: 78,
    },
]
const offerList = [
    {
        id: 1,
        name: 'All offers',
        number: 48,
    },
    {
        id: 2,
        name: 'Offers near you',
        number: 12,
    },
    {
        id: 3,
        name: 'Restaurant picks',
        number: 0,
    },
    {
        id: 4,
        name: 'Free items',
        number: 23,
    },
    {
        id: 5,
        name: '10% off',
        number: 0,
    },
    {
        id: 6,
        name: '20% off',
        number: 2,
    },
    {
        id: 7,
        name: 'Free Delivery',
        number: 2,
    },
    {
        id: 8,
        name: 'Meal Deals',
        number: 17,
    },
    {
        id: 9,
        name: 'Special Offer',
        number: 5,
    },
]
const categoryList = [
    {
        id: 1,
        name: '2 Dine for £20',
        number: 48,
    },
    {
        id: 2,
        name: '25% off',
        number: 12,
    },
    {
        id: 3,
        name: '30% off local takeaways',
        number: 0,
    },
    {
        id: 4,
        name: '50% off',
        number: 23,
    },
    {
        id: 5,
        name: 'Acai',
        number: 0,
    },
    {
        id: 6,
        name: 'Aero Peppermint',
        number: 2,
    },
    {
        id: 7,
        name: 'Afghan',
        number: 2,
    },
    {
        id: 8,
        name: 'African',
        number: 17,
    },
    {
        id: 9,
        name: 'Alcohol',
        number: 5,
    },
    {
        id: 10,
        name: 'All Day Breakfast',
        number: 5,
    },
    {
        id: 11,
        name: 'American',
        number: 35,
    },
    {
        id: 12,
        name: 'Aperol',
        number: 3,
    },
    {
        id: 13,
        name: 'Argentinian',
        number: 0,
    },
]

const ProductFilter = () => {
    const [selectDeliver, setSelectDeliver] = useState(1);
    const [selectSort, setSelectSort] = useState(1);
    const [selectRating, setSelectRating] = useState(1);
    const [selectOffer, setSelectOffer] = useState(1);
    const [selectCategory, setSelectCategory] = useState(1);

    // Show Accordian of Filter
    const [showSort, setShowSort] = useState(true);
    const [showRating, setShowRating] = useState(true);
    const [showOffers, setShowOffers] = useState(true);
    const [showCategory, setShowCategory] = useState(true);

    const onDeliver = (id) => {
        setSelectDeliver(prevID=>{
            if((prevID) === id) return id;
            return id;
        })
    }
    const onSort = (id) => {
        setSelectSort(prevId=> {
            if(prevId === id) return id
            return id
        })
    }
    const onRating = (id) => {
        setSelectRating(prevId=> {
            if(prevId === id) return id
            return id
        })
    }
    const onOffer = (id) => {
        setSelectOffer(prevId=> {
            if(prevId === id) return id
            return id
        })
    }
    const onCategory = (id) => {
        setSelectCategory(prevID => {
            if(prevID === id) return id
            return id
        })
    }

    return (
        <Box className='filter'>
            <Box className='address'>
                <Box className='address__img'>
                    <img src={addIcon} alt="" />
                </Box>
                <Box className='address__text'>
                    <span className='title'>Now</span>
                    <address>
                        <span className='add'>Wimbledon Park a...</span>
                        <span className='change'>Change</span>
                    </address>
                </Box>
            </Box>
            <Grid className="customScroll">
                <Box className='filter__deliverType'>
                    <ul className='radioList'>
                        {deliverList.map((item) => (
                        <li key={item.id}>
                            <label className={item.id === selectDeliver ? 'active' : ''}>
                                <input type={'radio'} name="deliver" onClick={()=> onDeliver(item.id)} />
                                <span>{item.name}</span>
                            </label>
                        </li>
                        ))}
                    </ul>
                </Box>
                <Box className='filter__sort'>
                    <Button variant="text" className='collapes' onClick={()=> setShowSort(!showSort)}>
                        Sort
                        {showSort ? <FaChevronUp color='#E51B23' />: <FaChevronDown color='#E51B23' />}
                    </Button>
                    {showSort &&
                    <ul className='radioList'>
                        {sortList.map((item) => (
                        <li key={item.id}>
                            <label className={item.id === selectSort ? 'active' : ''}>
                                <input type={'radio'} name="deliver" onClick={()=> onSort(item.id)} />
                                <span>{item.name}</span>
                            </label>
                        </li>
                        ))}
                    </ul>
                    }
                </Box>
                <Box className='filter__sort'>
                    <Button variant="text" className='collapes' onClick={()=> setShowRating(!showRating)}>
                        Hygiene Rating
                        {showRating ? <FaChevronUp color='#E51B23' />: <FaChevronDown color='#E51B23' />}
                    </Button>
                    {showRating &&
                    <ul className='radioList'>
                        {ratingList.map((item) => (
                        <li key={item.id}>
                            <label className={item.id === selectRating ? 'active' : ''}>
                                <input type={'radio'} name="deliver" onClick={()=> onRating(item.id)} />
                                <span>{item.name} <i>({item.number})</i></span>
                            </label>
                        </li>
                        ))}
                    </ul>
                    }
                </Box>
                <Box className='filter__sort'>
                    <Button variant="text" className='collapes' onClick={()=> setShowOffers(!showOffers)}>
                        Offers
                        {showOffers ? <FaChevronUp color='#E51B23' />: <FaChevronDown color='#E51B23' />}
                    </Button>
                    {showOffers &&
                    <ul className='radioList'>
                        {offerList.map((item) => (
                        <li key={item.id}>
                            <label className={item.id === selectOffer ? 'active' : ''}>
                                <input type={'radio'} name="deliver" onClick={()=> onOffer(item.id)} />
                                <span>{item.name} <i>({item.number})</i></span>
                            </label>
                        </li>
                        ))}
                    </ul>
                    }
                </Box>
                <Box className='filter__sort'>
                    <Button variant="text" className='collapes' onClick={()=> setShowCategory(!showCategory)}>
                        Categories
                        {showCategory ? <FaChevronUp color='#E51B23' />: <FaChevronDown color='#E51B23' />}
                    </Button>
                    {showCategory &&
                    <ul className='radioList'>
                        {categoryList.map((item) => (
                        <li key={item.id}>
                            <label className={item.id === selectCategory ? 'active' : ''}>
                                <input type={'radio'} name="deliver" onClick={()=> onCategory(item.id)} />
                                <span>{item.name} <i>({item.number})</i></span>
                            </label>
                        </li>
                        ))}
                    </ul>
                    }
                </Box>
            </Grid>
        </Box>
    )
}
export default ProductFilter;
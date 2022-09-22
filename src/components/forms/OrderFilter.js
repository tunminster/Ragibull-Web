import React from 'react';
import { Box, Grid } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';

const OrderFilter = () => {
    return (
        <Grid className='filterForm'>
            <Grid className='filterForm__bg'>
                <Grid className='row'>
                    <Box className="col-6">
                        <Box className='form-group search'>
                            <div className='position-relative'>
                                <span className='icon'><FmdGoodIcon /></span>
                                <input type={'text'} placeholder='Enter Delivery address' className='form-control' />
                            </div>
                        </Box>
                    </Box>
                    <Box className="col-6">
                        <Box className='last'>
                            <Box className='form-group'>
                                <div className='position-relative'>
                                    <span className='icon'><WatchLaterOutlinedIcon /></span>
                                    <select className='form-control custom-select'>
                                        <option value="Deliver Now">Deliver Now</option>
                                        <option value="Deliver Now">Deliver Now</option>
                                        <option value="Deliver Now">Deliver Now</option>
                                    </select>
                                </div>
                            </Box>
                            <Box className='form-group'>
                                <button type='button' className='btn btn-primary'>Find Food</button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default OrderFilter;
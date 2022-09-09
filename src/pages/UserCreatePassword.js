import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import 'sass/UserLogin.scss';

const UserCreatePassword = () => {
    return (
        <Grid className="userLogin">
            <Grid className='container'>
                <Box className='userLogin__logo'>
                    <Link to="/user-home">
                        <img src={logo} alt="logo" />
                    </Link>
                </Box>
                <Box className='userLogin__title'>
                    <h2>Create New Password</h2>
                </Box>
                <Box className='form-group'>
                    <label>New Password</label>
                    <input type={'password'} placeholder="Enter New Password" className="form-control" />
                </Box>
                <Box className='form-group'>
                    <label>Confirm Password</label>
                    <input type={'password'} placeholder="Enter Confirm Password" className="form-control" />
                </Box>
                <Box className='submit' sx={{ textAlign: 'center', pt: '20px' }}>
                    <Button variant="outlined" sx={{ width: '169px', mb: '13px'}}>Submit</Button>
                </Box>
            </Grid>
        </Grid>
    )
}
export default UserCreatePassword
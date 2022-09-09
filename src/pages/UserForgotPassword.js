import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import 'sass/UserLogin.scss';

const UserForgotPassword = () => {
    return (
        <Grid className="userLogin">
            <Grid className='container'>
                <Box className='userLogin__logo'>
                    <Link to="/user-home">
                        <img src={logo} alt="logo" />
                    </Link>
                </Box>
                <Box className='userLogin__title'>
                    <h2>Forgot Your Password</h2>
                    <p>Enter your registered email below to receive password reset instruction</p>
                </Box>
                <Box className='form-group'>
                    <label>Email Address</label>
                    <input type={'text'} placeholder="Enter Email Address" className="form-control" />
                </Box>
                <Box className='submit' sx={{ textAlign: 'center', pt: '20px' }}>
                    <Link to="/user-create-password">
                    <Button variant="outlined" sx={{ width: '169px', mb: '13px'}}>Submit</Button>
                    </Link>
                </Box>
            </Grid>
        </Grid>
    )
}
export default UserForgotPassword
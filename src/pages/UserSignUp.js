import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import Google from 'assets/images/login-google-icon.png';
import facebook from 'assets/images/login-facebook-icon.png';
import 'sass/UserLogin.scss';

const loginWithSocial = [
    {
        id: 1,
        img: Google,
        alt: 'Google',
        path: '/'
    },
    {
        id: 2,
        img: facebook,
        alt: 'Facebook',
        path: '/'
    },
]

const UserSignUp = () => {
    return (
        <Grid className="userLogin">
            <Grid className='container'>
                <Box className='userLogin__logo'>
                    <Link to="/user-home">
                        <img src={logo} alt="logo" />
                    </Link>
                </Box>
                <Box className='form-group'>
                    <label>Full Name</label>
                    <input type={'text'} placeholder="Enter Full Name" className="form-control" />
                </Box>
                <Box className='form-group'>
                    <label>Phone Number</label>
                    <input type={'text'} placeholder="Enter Phone Number" className="form-control" />
                </Box>
                <Box className='form-group'>
                    <label>Email Address</label>
                    <input type={'text'} placeholder="Enter Email Address" className="form-control" />
                </Box>
                <Box className='form-group'>
                    <label>Password</label>
                    <input type={'password'} placeholder="Enter Password" className="form-control" />
                </Box>
                <Box className='submit' sx={{ textAlign: 'center', pt: '20px' }}>
                    <Button variant="outlined" sx={{ width: '169px', mb: '13px'}}>Sign Up</Button>
                    <Typography sx={{ m: 0, fontSize: '14px', color: '#282828', fontFamily: 'Montserrat", sans-serif', fontWeight: '500' }}>Do You Have An Account? <Link to="/user-login" style={{ color: '#E51B23'}}>Login</Link></Typography>
                </Box>
                <Box sx={{ pt: '32px'}}>
                    <Typography sx={{ mb: '17px', fontSize: '14px', color: '#282828', fontFamily: 'Montserrat", sans-serif', fontWeight: '500' }}>Or</Typography>
                    <Typography conponent="ul" sx={{
                        listStyle: 'none',
                        p: 0,
                        m: 0,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        {loginWithSocial.map(item => (
                        <Typography conponent="li" key={item.id} sx={{ mx: '10px' }}>
                            <Link to={item.path}>
                                <img src={item.img} alt={item.alt} />
                            </Link>
                        </Typography>
                        ))}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}
export default UserSignUp
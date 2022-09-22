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

const UserLogin = () => {
    return (
        <Grid className="userLogin">
            <Grid className='container'>
                <Box className='userLogin__logo'>
                    <Link to="/user-home">
                        <img src={logo} alt="logo" />
                    </Link>
                </Box>
                <Box className='form-group'>
                    <label>Email Address</label>
                    <input type={'text'} placeholder="Enter Email Address" className="form-control" />
                </Box>
                <Box className='form-group'>
                    <label>Password</label>
                    <input type={'password'} placeholder="Enter Password" className="form-control" />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: '10px'}}>
                        <Link to={"/user-forgot-password"}>
                            <Button variant="text" sx={{
                                color: '#E51B23',
                                textTransform: 'capitalize',
                                fontSize: '16px',
                                fontFamily: 'Montserrat", sans-serif'
                            }}>
                                Forgot Password?
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box className='submit' sx={{ textAlign: 'center'}}>
                    <Link to="/products">
                        <Button variant="outlined" sx={{ width: '169px', mb: '13px'}}>Login</Button>
                    </Link>
                    <Typography sx={{ m: 0, fontSize: '14px', color: '#282828', fontFamily: 'Montserrat", sans-serif', fontWeight: '500' }}>Don’t Have An Account? <Link to="/user-signup" style={{ color: '#E51B23'}}>Sign Up</Link></Typography>
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
export default UserLogin
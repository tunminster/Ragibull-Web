import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import 'sass/UserLogin.scss';
import LoadingButton from 'components/common/ButtonLoader';
import ButtonLoader from 'components/common/ButtonLoader';

const UserOTPVerify = (props) => {

    const [otp, setOTP] = useState(null);

    const onResendClick = () => {

    }

    console.log({props});

    const onChangeOTP = (value) => {
        if (value) {
            setOTP(value)
        }

    }
    return (
        <Grid className="userLogin">
            <Grid className='container'>
                <Box className='userLogin__logo'>
                    <Link to="/user-home">
                        <img src={logo} alt="logo" />
                    </Link>
                </Box>
                <Box className='userLogin__title'>
                    <h2>OTP Verification</h2>
                    <p>Enter the 6 digits code sent to your registered Email address</p>
                </Box>
                <Box className='form-group'>
                    <label>OTP</label>
                    <input type={'number'} placeholder="Enter OTP" className="form-control" maxLength={6} onChange={(e) => onChangeOTP(e.target.value)} />
                </Box>
                <Box className='submit' sx={{ textAlign: 'center', pt: '20px' }}>
                    {props?.loader ?
                        <ButtonLoader /> :
                        <Button variant="outlined" sx={{ width: '169px', mb: '13px' }} disabled={otp?.length < 6 || otp === null ? true : false} onClick={() => props.SubmitOTP(otp)}>Verify</Button>}
                    {/* <Typography sx={{ m: 0, fontSize: '14px', color: '#282828', fontFamily: 'Montserrat", sans-serif', fontWeight: '500' }}>Didn't get the code ? <Link style={{ color: '#E51B23' }} onClick={() => onResendClick()}>Resend</Link></Typography> */}

                </Box>
            </Grid>
        </Grid>
    )
}
export default UserOTPVerify
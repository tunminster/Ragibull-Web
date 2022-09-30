import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import logo from 'assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import Google from 'assets/images/login-google-icon.png';
import facebook from 'assets/images/login-facebook-icon.png';
import 'sass/UserLogin.scss';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { API } from 'api/API';
import { TramRounded } from '@mui/icons-material';
import UserOTPVerify from './UserOTPVerify';
import ButtonLoader from 'components/common/ButtonLoader';

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

const requiredValidationMsg = "This field is required.";

const schema = yup.object().shape({
    fullName: yup.string().required(requiredValidationMsg),
    // phone: yup.string().required(requiredValidationMsg),
    email: yup.string().required(requiredValidationMsg).email(),
    password: yup.string().required(requiredValidationMsg).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least 8 characters, one uppercase, one number and one special case character")
})

const UserSignUp = () => {

const [isLoading, setIsLoading] = useState(false)
const [verifyLoader, setVerifyLoader] = useState(false)
const [showOTPScreen, setShowOTPScreen] = useState(false)
const [userData, setUserData] = useState(null)
const history = useHistory();

    const {
        register,
        handleSubmit,
        formState:{ errors }
    } = useForm({resolver: yupResolver(schema)});

    const onSubmit = async  (data, e) => {
        console.log(data, e);
        setIsLoading(true)
        data.confirmPassword=data.password
        setUserData(data)
        sendOTP(data)

        
    }

    const sendOTP=async(data)=>{
        setIsLoading(true)

        try {
           let params ={
        
                fullName: data.fullName,
                email: data.email
            
           }
              const response=await API.sendOTPOnUserEmail(params)
              console.log(response);
              if(response?.status && response.userEmailAddress) {
                setShowOTPScreen(true)
                //   alert("User Registered SuccessFully")
                //  history.push("/user-login")
              }
              else {
                  alert("Error")
              }

          }
          catch(e) {
              console.error(e);
              alert("Network Error")
          }
          finally {
              setIsLoading(false)
          }
    }

    const SubmitOTP=async (code)=>{
        setVerifyLoader(true)
        try {
            let params ={
                 email: userData?.email,
                code
             
            }
               const response=await API.verifyUserOTP(params)
               console.log(response);
               if(response?.status==='approved') {
                registerUser()
               
               }
               else {
                   alert("Wrong OTP")
               }
 
           }
           catch(e) {
               console.error(e);
               alert("Network Error")
           }
           finally {
            setVerifyLoader(false)

           }
    }
    
    
    const registerUser=async ()=>{
      
        let params=userData;
        delete params.fullName
       try {
            const response=await API.userSignUp(params)
            console.log(response);
            if(response==='Account created') {
                alert("User Registered SuccessFully")
               history.push("/user-login")
            }
            else {
                alert("Error")
            }
        }
        catch(e) {
            console.error(e);
            alert("Network Error")

        }
        finally {
            setIsLoading(false)

        }
    }


    const onError = (errors, e) => console.log(errors, e);

    return (
        <Grid className="userLogin">
            <Grid className='container'>
                <Box className='userLogin__logo'>
                    <Link to="/user-home">
                        <img src={logo} alt="logo" />
                    </Link>
                </Box>

             {!showOTPScreen ?  <form onSubmit={handleSubmit(onSubmit, onError)}>

                    <Box className='form-group'>
                        <label>Full Name</label>
                        <input type={'text'} placeholder="Enter Full Name" className="form-control"
                            {...register("fullName")} 
                            />
                        <p className="errorMsg">
                            {errors.fullName?.message}
                        </p>
                    </Box>
                    <Box className='form-group'>
                        <label>Phone Number</label>
                        <input type={'text'} placeholder="Enter Phone Number" className="form-control"
                            // {...register("phone")} 
                            />
                        <p className="errorMsg">
                            {errors.phone?.message}
                        </p>
                    </Box>
                    <Box className='form-group'>
                        <label>Email Address</label>
                        <input type={'text'} placeholder="Enter Email Address" className="form-control"
                            {...register("email")} />
                        <p className="errorMsg">
                            {errors.email?.message}
                        </p>
                    </Box>
                    <Box className='form-group'>
                        <label>Password</label>
                        <input type={'password'} placeholder="Enter Password" className="form-control"   {...register("password")} />
                        <p className="errorMsg">
                            {errors.password?.message}
                        </p>
                    </Box>
                    <Box className='submit' sx={{ textAlign: 'center', pt: '20px' }}>
                        <>
                        {!isLoading?<Button type="submit" variant="outlined" sx={{ width: '169px', mb: '13px' }}>Sign Up</Button>
                        :<ButtonLoader/>}
                        </>
                        <Typography sx={{ m: 0, fontSize: '14px', color: '#282828', fontFamily: 'Montserrat", sans-serif', fontWeight: '500' }}>Do You Have An Account? <Link to="/user-login" style={{ color: '#E51B23' }}>Login</Link></Typography>
                    </Box>
                </form>
                :
                <UserOTPVerify  loader={verifyLoader} SubmitOTP={SubmitOTP}/>}
               {!showOTPScreen && <Box sx={{ pt: '32px' }}>
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
                </Box>}
            </Grid>
        </Grid>
    )
}
export default UserSignUp
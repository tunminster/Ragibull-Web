import React,{ useState }  from 'react';
import { Box, Button, Grid, Typography,CircularProgress } from '@mui/material';
import logo from 'assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';

import Google from 'assets/images/login-google-icon.png';
import facebook from 'assets/images/login-google-icon.png';
import 'sass/UserLogin.scss';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { API } from 'api/API';
import { LoadingButton } from '@mui/lab';
import { useAuthContext } from 'context/AuthContext/AuthContext';

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
    // fullName: yup.string().required(requiredValidationMsg),
    // phone: yup.string().required(requiredValidationMsg),
    userName: yup.string().required(requiredValidationMsg).email(),
    password: yup.string().required(requiredValidationMsg)
})

const UserLogin = () => {

    const authContext=useAuthContext()

    console.log(authContext);

    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data, e) => {
        setIsLoading(true)
        try {
            const response = await API.userLogin(data)            
            if(response ?.auth_token) {
                localStorage.removeItem("userData");
                localStorage.removeItem("isLoggedIn")

                localStorage.setItem("userData",response);
                localStorage.setItem("isLoggedIn",true);
                authContext.doLogin(true)
                authContext.setUserData(response)
                alert("Login sucessfully")
                history.replace("/products")
            }
            else {
                alert("Error")
            }

        }
        catch (e) {
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
                <form onSubmit={handleSubmit(onSubmit, onError)}>

                    <Box className='form-group'>
                        <label>Email Address</label>
                        <input type={'text'} placeholder="Enter Email Address" className="form-control"   {...register("userName")} />
                        <p className="errorMsg">
                            {errors.userName?.message}
                        </p>
                    </Box>
                    <Box className='form-group'>
                        <label>Password</label>
                        <input type={'password'} placeholder="Enter Password" className="form-control"   {...register("password")} />
                        <p className="errorMsg">
                            {errors.password?.message}
                        </p>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: '10px' }}>
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
                    <Box className='submit' sx={{ textAlign: 'center' }}>

                        <>
                            {!isLoading ? <Button type="submit" variant="outlined" sx={{ width: '169px', mb: '13px' }}>Login</Button>
                                : <LoadingButton
                                    loading
                                    variant="outlined"
                                    sx={{ width: '169px', height: '40px', mb: '13px' }}
                                    loadingIndicator={<CircularProgress color="error" size={30} />}
                                />}
                        </>
                        <Typography sx={{ m: 0, fontSize: '14px', color: '#282828', fontFamily: 'Montserrat", sans-serif', fontWeight: '500' }}>Don’t Have An Account? <Link to="/user-signup" style={{ color: '#E51B23' }}>Sign Up</Link></Typography>
                    </Box>
                </form>
                <Box sx={{ pt: '32px' }}>
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
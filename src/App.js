import React, { useEffect } from 'react';
import "./App.scss";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopRegister from "./pages/ShopRegister";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import ShopOwner from "./pages/ShopOwner";
import ShopOwnerForm from "./pages/ShopOwnerForm";
import DeliveryPartner from "./pages/DeliveryPartner";
import ReactGA from "react-ga";
import DeliveryPartnerForm from "./pages/DeliveryPartnerForm";
import DeliveryPartnerFormSubmit from "./pages/DeliveryPartnerFormSubmit";
import { Redirect } from "react-router-dom";
import CustomerHome from './pages/CustomerHome';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import UserForgotPassword from './pages/UserForgotPassword';
import UserCreatePassword from './pages/UserCreatePassword';
import ProductList from 'pages/ProductList';
import ProductDetail from 'pages/ProductDetail';
import ProductOrders from 'pages/ProductOrders';
import ProductOrderPayment from 'pages/ProductOrderPayment';
import { AuthProvider, useAuthContext } from 'context/AuthContext/AuthContext';
import PrivateRoute from 'PrivateRoute/PrivateRoute';
import { API } from 'api/API';

function App() {
  ReactGA.initialize('G-4S7EBSPZLR');

  const authContext=useAuthContext()

  console.log('isLoggedIn',authContext);


  useEffect(() => {
    let token=localStorage.getItem("t");
    if(token) {
    let userData=localStorage.getItem("userData");
let parsedUserData=JSON.parse(userData)
      mappUserDetails(token,parsedUserData)
    }
  }, [authContext?.isLoggedIn])

  const mappUserDetails = async (token,data) => {
    try {
        const response = await API.getUserDetails(token)  
        const data=response.data      
        console.log('response',data,data?.userName);    

        if(data?.userName) {
            authContext.doLogin(true)
            authContext.setUserToken(token)
            authContext.setUserData(data)
        }
    }
    catch (e) {
        console.error(e);
        alert("Network Error")

    }
    
}  
  
  return (
    <>
    <div className="App">
      

      <Router>
        <Switch>
        <Route path="/support" component={Support}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/privacy" component={Privacy}></Route>
        <Route path="/terms" component={Terms}></Route>
        <Route path="/shop-owner-onboarding" component={ShopRegister}></Route>
        <Route path="/driver-onboarding" component={Register}></Route>
        <Route path="/shop-owner" component={ShopOwner}></Route>
        <Route path="/delivery-partner" component={DeliveryPartner}></Route>
        {/* <Route path="/" exact component={Home} render={() => <Redirect to="/delivery-partner-form" />} ></Route> */}
        <Route exact path="/delivery-partner-form" component={DeliveryPartnerForm}></Route>
        <Route exact path="/delivery-partner-form-submit" component={DeliveryPartnerFormSubmit}></Route>
        <Route path="/" exact component={Home} render={() => <Redirect to="/form" />} ></Route>
        <Route exact path="/shop-owner-form-submit" component={DeliveryPartnerFormSubmit}></Route>
        <Route exact path="/shop-owner-form" component={ShopOwnerForm}></Route>
        <Route exact path="/user-home" component={CustomerHome}></Route> 
        <Route exact path="/user-login" component={UserLogin}></Route>
        <Route exact path="/user-signup" component={UserSignUp}></Route>
        <Route exact path="/user-forgot-password" component={UserForgotPassword}></Route>
        <Route exact path="/user-create-password" component={UserCreatePassword}></Route>
        <PrivateRoute exact path="/products" component={ProductList}></PrivateRoute>
        <PrivateRoute exact path="/product-detail/:id" component={ProductDetail}></PrivateRoute>
        <PrivateRoute exact path="/product-orders" component={ProductOrders}></PrivateRoute>
        <PrivateRoute exact path="/product-order-payment" component={ProductOrderPayment}></PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    

    </div>
    </>
  );
  
}



export default App;

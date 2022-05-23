import "./App.scss";
import Header from "./components/layout/Header";
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
import DeliveryPartner from "./pages/DeliveryPartner";
import ReactGA from "react-ga";
import DeliveryPartnerForm from "./pages/DeliveryPartnerForm";
import DeliveryPartnerFormSubmit from "./pages/DeliveryPartnerFormSubmit";
import { Redirect } from "react-router-dom";

function App() {
  ReactGA.initialize('G-4S7EBSPZLR');
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/support" component={Support}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/privacy" component={Privacy}></Route>
        <Route path="/terms" component={Terms}></Route>
        <Route path="/shop-owner-onboarding" component={ShopRegister}></Route>
0       <Route path="/driver-onboarding" component={Register}></Route>
        <Route path="/shop-owner" component={ShopOwner}></Route>
        <Route path="/delivery-partner" component={DeliveryPartner}></Route>
        <Route path="/" exact component={Home} render={() => <Redirect to="/delivery-partner-form" />} ></Route>
        <Route exact path="/delivery-partner-form" component={DeliveryPartnerForm}></Route>
        <Route exact path="/delivery-partner-form-submit" component={DeliveryPartnerFormSubmit}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

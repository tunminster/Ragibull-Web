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
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize('G-4S7EBSPZLR');
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/support" component={Support}></Route>
        <Route path="/privacy" component={Privacy}></Route>
        <Route path="/terms" component={Terms}></Route>
          <Route path="/shop-owner-onboarding" component={ShopRegister}></Route>
0          <Route path="/driver-onboarding" component={Register}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

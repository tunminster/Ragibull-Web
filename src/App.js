import "./App.scss";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopRegister from "./pages/ShopRegister";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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

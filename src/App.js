import "./App.scss";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
         
          {/* <Route path="/register" component={Register}></Route> */}
          <Route path="/" exact component={Home}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

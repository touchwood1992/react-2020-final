import React from "react";
// Loading css
import "bootstrap/dist/css/bootstrap.min.css";
import "lato-font/css/lato-font.css";
import "./style.css";
// Loading common components
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

//Loading Pages
import Home from "./components/Pages/Home/Home";
import Signup from "./components/Pages/Signup/Signup";
import Login from "./components/Pages/Login/Login";

//Loding react router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div id="main-site">
        <Header></Header>
        <main id="site-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact render={() => <Login></Login>} />
            <Route path="/signup" exact render={() => <Signup></Signup>} />
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
};
export default App;

import React from "react";
// Loading css
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
// Loading common components
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

//Loading Pages
import Home from "./components/Pages/Home/Home";
import Signup from "./components/Pages/Signup/Signup";
import SignIn from "./components/Pages/SignIn/SignIn";
import Github from "./components/Pages/Github/Github";
import MyContacts from "./components/Pages/MyContacts/MyContacts";
import Orders from "./components/Pages/Orders/Orders";
import About from "./components/Pages/About/About";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import Cart from "./components/Pages/Cart/Cart";
//Loding react router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Loading Context
import AuthState from "./contexts/Auth/AuthState";
import GithubState from "./contexts/Github/GithubState";
import ContactState from "./contexts/Contacts/ContactState";
//Import react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Import Layout component
import Layout from "./Layout";
const App = () => {
  return (
    <AuthState>
      <GithubState>
        <ContactState>
          <Router>
            <div id="main-site">
              <Layout>
                <ToastContainer />
                <Header></Header>
                <main id="site-content">
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/github" exact component={Github} />
                    <Route path="/my-contacts" exact component={MyContacts} />
                    <Route path="/orders" exact component={Orders} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact-us" exact component={ContactUs} />
                    <Route path="/cart" exact component={Cart} />
                    <Route
                      path="/signin"
                      exact
                      render={(props) => <SignIn {...props}></SignIn>}
                    />
                    <Route
                      path="/signup"
                      exact
                      render={(props) => <Signup {...props}></Signup>}
                    />
                  </Switch>
                </main>
                <Footer></Footer>
              </Layout>
            </div>
          </Router>
        </ContactState>
      </GithubState>
    </AuthState>
  );
};
export default App;

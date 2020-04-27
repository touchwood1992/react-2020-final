import React, { useContext } from "react";
//import Navva from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar";
import { NavLink, withRouter } from "react-router-dom";

//Import auth context
import AuthContext from "../../../contexts/Auth/AuthContext";
import { toast } from "react-toastify";

import CapitalLetter from "../../../utils/CapitalLetter";
const Header = (props) => {
  //Auth Context variable
  const authContext = useContext(AuthContext);

  const logOutUser = async (e) => {
    e.preventDefault();
    try {
      await authContext.logoutUser();
      //Set toast
      toast.success("Logout Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      props.history.push("/");
    } catch (error) {
      //Toast error
      toast.success(error.messsage, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="justify-content-between"
    >
      <NavLink exact className="navbar-brand" to="/">
        React-2020
      </NavLink>

      <div className="text-white mr-5 user-head">
        {authContext.user?.name
          ? `Hello, ${CapitalLetter(authContext.user.name)}`
          : ""}
      </div>
      <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/github">
              GITHUB FIND
            </NavLink>
          </li>
          {authContext.user !== null ? (
            <>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/my-contacts">
                  MY CONTACTS
                </NavLink>
              </li>
              <li className="nav-item" style={{ display: "none" }}>
                <NavLink exact className="nav-link" to="/orders">
                  MY ORDDERS
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}
          <li className="nav-item" style={{ display: "none" }}>
            <NavLink exact className="nav-link" to="/orders">
              MY ORDDERS
            </NavLink>
          </li>
          <li className="nav-item" style={{ display: "none" }}>
            <NavLink exact className="nav-link" to="/about">
              ABOUT US
            </NavLink>
          </li>
          <li className="nav-item" style={{ display: "none" }}>
            <NavLink exact className="nav-link" to="/contact-us">
              CONTACT US
            </NavLink>
          </li>
          <li className="nav-item" style={{ display: "none" }}>
            <NavLink exact className="nav-link" to="/cart">
              CART
            </NavLink>
          </li>

          {authContext.user !== null ? (
            <>
              <li className="nav-item">
                <a href="/logout" className="nav-link" onClick={logOutUser}>
                  LOGOUT
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  SIGNUP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">
                  SIGNIN
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </Navbar.Collapse>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Navbar>
  );
};
export default withRouter(Header);

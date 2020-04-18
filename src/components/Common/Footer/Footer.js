import React from "react";
import { withRouter } from "react-router-dom";
const Footer = (props) => {
  return (
    <footer className="bg-dark text-center text-white p-3">
      Developed by Prashant Parmar &copy; 2020
    </footer>
  );
};
export default withRouter(Footer);

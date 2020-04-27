import React, { useEffect, useContext } from "react";
import AuthContext from "./contexts/Auth/AuthContext";

//Import loading icon
import Loading from "./components/Common/Loading/Loading";

//Import firebase
import firebase from "./Config/FirebaseAuth";

const Layout = (props) => {
  const authContext = useContext(AuthContext);

  //Check if user already logged in or not
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const setObj = {
          name: user.displayName,
          id: user.uid,
          email: user.email,
          image: user.photoURL,
        };
        authContext.userSignOnload(setObj);

        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
      } else {
        // User is signed out.
        authContext.userSignOutOnload();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authContext.websiteloading === true) {
    return <Loading fullpage="true"></Loading>;
  }
  return <>{props.children}</>;
};

export default Layout;

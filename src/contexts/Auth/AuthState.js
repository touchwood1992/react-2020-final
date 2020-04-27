import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { SIGNOUT, SIGNUPONLOAD } from "./Types";
import firebase from "../../Config/FirebaseAuth";
const AuthState = (props) => {
  const defaultState = { user: null, loggedIn: false, websiteloading: true };
  const [state, dispatch] = useReducer(AuthReducer, defaultState);

  const userSignIn = async (obj) => {
    try {
      //This call will trigger an event in Layout.js so we can manage current user state.
      await firebase.auth().signInWithEmailAndPassword(obj.email, obj.password);
    } catch (error) {
      dispatch({ type: SIGNOUT });
      throw error;
    }

    //dispatch({ type: SIGNIN, payload: obj });
  };
  const userSignInwithGogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/userinfo.email");
    try {
      await firebase.auth().signInWithPopup(provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      //const token = result.credential.accessToken;
      // The signed-in user info.
      //const user = result.user;
      //console.log(result.user);
      // ...
    } catch (error) {
      // Handle Errors here.
      //var errorCode = error.code;
      //var errorMessage = error.message;
      // The email of the user's account used.
      //var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      //var credential = error.credential;
      // ...
      dispatch({ type: SIGNOUT });
      throw error;
    }
  };
  const userSignUp = async (obj) => {
    try {
      //This call will trigger an event in Layout.js so we can manage current user state.
      await firebase
        .auth()
        .createUserWithEmailAndPassword(obj.email, obj.password);

      // const setObj = {
      //   name: submitCredentialsToFireBase.user.displayName,
      //   id: submitCredentialsToFireBase.user.uid,
      //   email: submitCredentialsToFireBase.user.email,
      //   image: submitCredentialsToFireBase.user.photoURL,
      // };

      // dispatch({ type: SIGNUP, payload: setObj });
    } catch (error) {
      dispatch({ type: SIGNOUT });
      throw error;
      //var errorCode = error.code;
      //var errorMessage = error.message;
    }
  };

  const userSignOnload = (setObj) => {
    dispatch({ type: SIGNUPONLOAD, payload: setObj });
  };

  const userSignOutOnload = () => {
    dispatch({ type: SIGNOUT });
  };

  const logoutUser = async () => {
    try {
      await firebase.auth().signOut();
      //dispatch({ type: SIGNOUT });
    } catch (error) {
      throw error;
    }
  };

  const forgotpassword = async (email) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (error) {
      throw error;
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        websiteloading: state.websiteloading,
        userSignUp,
        userSignIn,
        userSignOnload,
        userSignOutOnload,
        logoutUser,
        userSignInwithGogle,
        forgotpassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import AuthContext from "../../../contexts/Auth/AuthContext";
import Loading from "../../Common/Loading/Loading";
import { toast } from "react-toastify";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
const SignIn = (props) => {
  const authContext = useContext(AuthContext);
  const [state, setState] = useState({ email: "", password: "" });
  const [loadState, setloadState] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);

  const bindUerForm = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (authContext.user !== null) {
      setloadState(false);
      props.history.push("/");
    }
  }, [props.history, authContext.user]);

  const userSignIn = async (e) => {
    e.preventDefault();
    setloadState(true);
    try {
      await authContext.userSignIn({
        email: state.email,
        password: state.password,
      });
      toast.success("Sign In Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setloadState(false);
    }
  };

  const userSignInWithGoogleee = async () => {
    setloadState(true);
    try {
      await authContext.userSignInwithGogle();
      setloadState(false);
      toast.success("Sign In Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      setloadState(false);

      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const backToSignIn = () => {
    setforgotpassword(!forgotpassword);
  };

  return (
    <Container>
      {forgotpassword ? (
        <ForgotPassword signIn={backToSignIn}></ForgotPassword>
      ) : (
        <>
          <h1 className="heading mt-3">SignIn</h1>
          <div className="row">
            <div className="col-md-6 mx-auto mt-2 mb-2">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={userSignIn}>
                    <div className="form-group">
                      <label
                        className="sr-only"
                        htmlFor="inlineFormInputGroupUsername2"
                      >
                        Email
                      </label>
                      <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text">@</div>
                        </div>
                        <input
                          type="email"
                          className="form-control"
                          id="inlineFormInputGroupUsername2"
                          placeholder="Enter Your Email"
                          required
                          value={state.email}
                          onChange={bindUerForm}
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="sr-only" htmlFor="inlineFormInputName2">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        placeholder="Enter Your Password"
                        required
                        value={state.password}
                        onChange={bindUerForm}
                        name="password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark mb-2 btn-block"
                    >
                      Sign In
                    </button>
                    {loadState === true ? <Loading></Loading> : ""}
                  </form>
                  <button
                    className="btn btn-primary mb-2 btn-block mt-2"
                    onClick={userSignInWithGoogleee}
                  >
                    Sign In with Google
                  </button>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setforgotpassword(!forgotpassword);
                    }}
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};
export default SignIn;

import React, { useState, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import AuthContext from "../../../contexts/Auth/AuthContext";
import { toast } from "react-toastify";
import Loading from "../../Common/Loading/Loading";
const Signup = (props) => {
  const authContext = useContext(AuthContext);
  const [state, setState] = useState({ email: "", password: "" });

  const [loadState, setloadState] = useState(false);

  useEffect(() => {
    if (authContext.user !== null) {
      setloadState(false);
      props.history.push("/");
    }
  }, [props.history, authContext.user]);

  const bindUerForm = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const userSignUp = async (e) => {
    e.preventDefault();
    setloadState(true);
    try {
      await authContext.userSignUp(state);
      //Correct Toast Message Show
      toast.success("Signup Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      //InCorrect Toast Message Show
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setloadState(false);
    }
  };

  return (
    <Container>
      <h1 className="heading mt-3">SignUp</h1>
      <div className="row">
        <div className="col-md-6 mx-auto mt-2 mb-2">
          <div className="card">
            <div className="card-body">
              <form onSubmit={userSignUp}>
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
                <button type="submit" className="btn btn-dark mb-2 btn-block">
                  Submit
                </button>
                {loadState === true ? <Loading></Loading> : ""}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Signup;

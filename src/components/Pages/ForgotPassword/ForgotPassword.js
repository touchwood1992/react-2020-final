import React, { useState, useContext } from "react";
import AuthContext from "../../../contexts/Auth/AuthContext";
import { toast } from "react-toastify";
import Loading from "../../Common/Loading/Loading";
const ForgotPassword = (props) => {
  const authContext = useContext(AuthContext);
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const onChnageBind = (e) => {
    setState(e.target.value);
  };
  const forgotpassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authContext.forgotpassword(state);
      toast.success("Reset password email sent!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setLoading(false);
      props.signIn();
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  };
  return (
    <>
      <h1 className="heading mt-3">Forgot Password</h1>
      <div className="row">
        <div className="col-md-6 mx-auto mt-2 mb-2">
          <div className="card">
            <div className="card-body">
              <form onSubmit={forgotpassword}>
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
                      value={state}
                      onChange={onChnageBind}
                      name="email"
                    />
                  </div>
                </div>
                <button className="btn btn-primary mb-2 btn-block mt-2">
                  Reset Password
                </button>
                {loading ? <Loading></Loading> : ""}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;

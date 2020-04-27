import React, { useState, useEffect, useContext } from "react";
import Loading from "../../../Common/Loading/Loading";
import GithubContext from "../../../../contexts/Github/GithubContext";
const SearchForm = () => {
  const githubContext = useContext(GithubContext);
  const [state, setState] = useState("");

  useEffect(() => {
    if (localStorage.getItem("githubsearch")) {
      githubContext.setSearchValue(localStorage.getItem("githubsearch"));
      setState(localStorage.getItem("githubsearch"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container mt-3">
      <h2 className="heading">Search Github user</h2>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              githubContext.setSearchValue(state);
            }}
          >
            <div className="form-group">
              <label htmlFor=""></label>
              <input
                type="text"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                value={state}
                className="form-control"
                required
              />
            </div>
            <button className="btn btn-primary btn-block">Search User</button>
            {githubContext.loading ? <Loading /> : ""}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

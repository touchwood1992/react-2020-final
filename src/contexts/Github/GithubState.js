import React, { useReducer } from "react";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SET_LOADING,
  SET_CONTACT,
  SET_SEARCH_VALUE,
  UNSET_LOADING,
} from "./Types";
const GithubState = (props) => {
  const defaultState = {
    loading: false,
    profile: null,
    repos: null,
    serchValue: "",
  };
  const setSearchValue = (payload) => {
    disppatch({ type: SET_SEARCH_VALUE, payload });
  };
  const setLoading = () => {
    disppatch({ type: SET_LOADING });
  };
  const removeLoading = () => {
    disppatch({ type: UNSET_LOADING });
  };
  const setContact = (payload) => {
    disppatch({ type: SET_CONTACT, payload });
  };

  const [state, disppatch] = useReducer(GithubReducer, defaultState);

  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        profile: state.profile,
        repos: state.repos,
        searchValue: state.serchValue,
        setSearchValue,
        setLoading,
        removeLoading,
        setContact,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;

import React, { useEffect, useContext } from "react";

import { toast } from "react-toastify";

import SearchForm from "./SearchForm/SearchForm";
import Profile from "./Profile/Profile";
import Repos from "./Repos/Repos";

import GithubContext from "../../../contexts/Github/GithubContext";

const axios = require("axios");

const Github = () => {
  const githubContext = useContext(GithubContext);

  //On page load get previous searched value from local storage and search again now...
  useEffect(() => {
    let current = true;
    if (
      (githubContext.repos === null && githubContext.searchValue) ||
      (githubContext.searchValue &&
        localStorage.getItem("githubsearch") !== githubContext.searchValue)
    ) {
      (async (val) => {
        //Set Loading true
        githubContext.setLoading();
        //Set value to local Storage

        //Search user from github
        try {
          const res = await axios.get(`https://api.github.com/users/${val}`, {
            // headers: {
            //   Authorization: `Basic M2I3NGI5Yjg3YThlN2NjZjZkNTVjMzlhYzMyZGU2NGQ0MGVmYTc0NA==`,
            // },
            headers: {
              Authorization: `token 2c02897ba56f9a4f9d79482ab89d54ad37a6f17f`,
            },
          });

          const repos = await axios.get(
            `https://api.github.com/users/${val}/repos?per_page=7`,
            {
              //
              headers: {
                Authorization: `Basic ${btoa(
                  "2c02897ba56f9a4f9d79482ab89d54ad37a6f17f"
                )}`,
              },
              // headers: {
              //   Authorization: `token 3b74b9b87a8e7ccf6d55c39ac32de64d40efa744`,
              // },
            }
          );

          if (current) {
            githubContext.setContact({
              profile: res.data,
              repos: repos.data,
              loading: false,
            });
          }
          //setting value to local storage
          localStorage.setItem("githubsearch", githubContext.searchValue);
        } catch (error) {
          if (error?.response?.data) {
            toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          } else {
            console.log(error);
            toast.error(error.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }

          if (current) {
            githubContext.setContact({
              profile: null,
              repos: null,
              loading: false,
            });
            //setting value to local storage
            localStorage.removeItem("githubsearch", githubContext.searchValue);
          }
        }
      })(githubContext.searchValue);
    }
    return () => {
      current = false;
      githubContext.removeLoading();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubContext.searchValue]);

  return (
    <>
      <SearchForm></SearchForm>
      <Profile profile={githubContext.profile}></Profile>
      <Repos repos={githubContext.repos}></Repos>
    </>
  );
};
export default Github;

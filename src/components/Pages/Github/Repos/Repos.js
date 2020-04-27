import React from "react";
const Repos = (props) => {
  const { repos } = props;
  if (repos === null) {
    return "";
  }
  return (
    <div className="container mb-2 mt-3">
      <h2 className="heading">Your Repos</h2>

      <ul className="list-group">
        {repos.map((r, i) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between"
              key={i}
            >
              <div>
                <a href={r.svn_url} target="_blank" rel="noopener noreferrer">
                  {r.name}
                </a>
              </div>
              <div>
                <span className="badge badge-primary  mr-2">
                  Archived : {r.archived ? "Yes" : "No"}
                </span>
                <span className="badge badge-secondary  mr-2 ">
                  Watcher : {r.watchers}
                </span>
                <span className="badge badge-success  mr-2">
                  Forks : {r.forks}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Repos;

import React from "react";

const Profile = (props) => {
  const { profile } = props;
  if (profile === null) {
    return "";
  }
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <img
                src={profile.avatar_url}
                className="img-thumbnail"
                alt="Git Profile"
              />
            </div>
            <div className="col-md-9">
              <div className="badges-container mb-2">
                <span className="badge badge-primary p-2 mr-2">
                  Public Repos : {profile.public_repos}
                </span>
                <span className="badge badge-secondary p-2 mr-2 ">
                  Followers : {profile.followers}
                </span>
                <span className="badge badge-success p-2 mr-2">
                  Following : {profile.following}
                </span>
                <span className="badge  badge-danger p-2 mr-2">
                  Public Gists : {profile.public_gists}
                </span>
              </div>
              <ul className="list-group">
                <li className="list-group-item">Company : {profile.company}</li>
                <li className="list-group-item">Website : {profile.blog}</li>
                <li className="list-group-item">
                  Location : {profile.location}
                </li>
                <li className="list-group-item">
                  Member Since : {profile.created_at}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

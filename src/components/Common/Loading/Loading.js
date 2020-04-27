import React from "react";
const Loading = (props) => {
  if (props.fullpage) {
    return (
      <div className="website-loader d-flex justify-content-center align-items-center">
        <div className="spinner-border mx-auto"></div>
      </div>
    );
  }
  return (
    <div className="spinner-border mx-auto btn-block d-flex justify-content-center"></div>
  );
};
export default Loading;

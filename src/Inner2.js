import React, { useState, useEffect } from "react";

const Inner2 = () => {
  const [state, setstate] = useState(0);
  useEffect(() => {
    console.log("Inner2 First useEffect called");
    return () => {
      console.log("Inner2 First cleanup called");
    };
  });

  useEffect(() => {
    console.log("Inner2  second useEffect called");
    return () => {
      console.log("Inner2 second cleanup called");
    };
  });

  return (
    <>
      {console.log("inner2 render method")}Inner2: {state}
    </>
  );
};

export default Inner2;

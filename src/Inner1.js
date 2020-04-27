import React, { useState, useEffect, memo } from "react";
const Inner1 = (props) => {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("Inner1 First useEffect called");
    return () => {
      console.log("Inner1 First cleanup called");
    };
  });

  useEffect(() => {
    console.log("Inner1  second useEffect called");
    return () => {
      console.log("Inner1 second cleanup called");
    };
  });

  useEffect(() => {
    console.log("Inner1  3rd useEffect called");
    return () => {
      console.log("Inner1 3rd cleanup called");
    };
  }, [props]);
  const inCremeMe = () => {
    setState(state + 1);
  };
  return (
    <>
      {console.log("inner1 render method")}Inner1: {state}
      <button onClick={inCremeMe}>Inner1 Increment</button>
    </>
  );
};

export default memo(Inner1);

import React, { useState, useEffect } from "react";
import Inner1 from "./Inner1";
import Inner2 from "./Inner2";
import usePrevious from "./Hooks/usePrevious";
// const TestPage = () => {
//   const [state, setstate] = useState(new Date().toString());

//   useEffect(() => {
//     console.log("USE EFFECT CALLED");
//     let interval = setInterval(() => {
//       console.log("SET INTERVAL CALLED");
//       setstate(new Date().toString());
//     }, 5000);
//     return () => {
//       console.log("CLEAN UP");
//       clearInterval(interval);
//     };
//   });

//   return (
//     <>
//       {console.log("boottomm")}
//       <button>{state}</button>
//     </>
//   );
// };

// const TestPage = () => {
//   const [state, setstate] = useState(null);
//   useEffect(() => {
//     const fn = function (e) {
//       setstate(`X:${e.clientX}`);
//       console.log("Mouse Moved");
//     };
//     window.addEventListener("mousemove", fn);

//     return () => window.removeEventListener("mousemove", fn);
//   });
//   return <>{state} </>;
// };
// export default TestPage;

// const TestPage = () => {
//   const [state, setstate] = useState(0);
//   const incrementHandler = () => {
//     setstate(state + 1);
//   };
//   useEffect(() => {
//     console.log("2nd Use Effect");

//     return () => {
//       console.log(
//         "When component state wll be updated at that this will run before useEffect clean Up"
//       );
//     };
//   });
//   return (
//     <>
//       {console.log("First" + state)}
//       <button onClick={incrementHandler}>Increment</button>
//       {state}
//     </>
//   );
// };
// export default TestPage;

const TestPage = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  const prev = usePrevious(state);
  console.log(prev);

  useEffect(() => {
    console.log("Main 1st useEffect Called");

    //setState(state + 1);

    return () => console.log("Main 1st cleanup Called");
  });

  useEffect(() => {
    console.log("Main 2nd useEffect Called");
    return () => console.log("Main 2nd cleanup Called");
  });

  const onClickHandler = () => {
    setState(state + 1);
    setState2(state2 + 2);
    console.error("Oh man cliked");
  };
  return (
    <>
      {console.log("main render method")}
      <Inner1 p={state}></Inner1>
      <Inner2 p={state2}></Inner2>
      <button onClick={onClickHandler}>{state}Main Increment</button>
    </>
  );
};
export default TestPage;

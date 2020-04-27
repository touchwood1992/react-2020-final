import React, { useEffect, useRef } from "react";

const usePrevious = (state) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = state;
    console.error(ref);
  });

  return ref;
};

export default usePrevious;

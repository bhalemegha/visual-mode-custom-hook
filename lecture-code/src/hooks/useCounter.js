import { useState } from "react";

const useCounter = function(start) {
  const [count, setCount] = useState(start);

  const increment = function() {
    setCount(count + 1);
  };

  const decrement = function() {
    setCount(count - 1);
  };

  const clear = function() {
    setCount(0);
  };

  return [ count, increment, decrement, clear ];
};

export default useCounter;
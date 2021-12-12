import useCounter from "hooks/useCounter";

const Counter = function(props) {
  const [count, increment, decrement, clear] = useCounter(props.start);

  return (
    <>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
      <button onClick={increment}>+</button>
    </>
  );
};

export default Counter;
import { useEffect, useState } from "react";
import ShowValue from "./ShowValue";

// let i = 0;

// function Practice({ value, setValue }) {
function Practice() {
  // useState returns but useEffect not
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  console.log("inside practice");

  const [state, setState] = useState({
    count: 0,
    count2: 0,
  });

  function handleClick() {
    // setCount(count + 1);
    // i++;

    setState({ ...state, count: state.count + 1 });
    // {count:0, count2: 0, count: state.count +1}
  }

  function handleClick2() {
    // i++;
    // setCount2(count2 + 1);

    setState({ ...state, count2: state.count2 + 1 });
    // {count:0, count2: 0, count2: state.count2 +1}
  }

  //   useEffect(() => {
  //     console.log("helllo");
  //     return () => {
  //       console.log("Byeeee");
  //     };
  //   }, [state.count]);

  // useEffect(() => {
  //   console.log("helllo");
  //   return () => {
  //     console.log("Byeeee");
  //   };
  // }, [i]);

  // console.log("helllo");

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClick}>Increase</button>
      <h1>{state.count2}</h1>
      <button onClick={handleClick2}>Increase</button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          //   i++;
          //   console.log(i);
        }}
      >
        Increase i
      </button>
      <br />
      <br />
      {/* <ShowValue value={value} setValue={setValue} /> */}
      <ShowValue />
    </div>
  );
}

export default Practice;

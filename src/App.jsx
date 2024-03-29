import { useEffect, useState } from "react";
import "./App.css";
import Practice from "./components/Practice";
import ChildrenTest from "./components/ChildrenTest";
import ValueContextProvider from "./store/ValueContextProvider";

// let i = 0;

function App() {
  console.log("inside app");

  // const [value, setValue] = useState(0);

  return (
    <>
      {/* <button onClick={() => setValue(value + 1)}>app value increase</button> */}
      {/* <Practice value={value} setValue={setValue} /> */}
      <ValueContextProvider>
        <Practice />
      </ValueContextProvider>
      <ChildrenTest>
        <h1>Hello world</h1>
        <h2>Hello world 2</h2>
      </ChildrenTest>
    </>
  );
}

export default App;

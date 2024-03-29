import React, { useContext } from "react";
import { ValueContext } from "../store/ValueContextProvider";

// const ShowValue = ({ value, setValue }) => {
const ShowValue = () => {
  const { appValue, setAppValue } = useContext(ValueContext);
  return (
    <div>
      <h1>App value state: {appValue}</h1>
      <button onClick={() => setAppValue(appValue + 1)}> value increase</button>
    </div>
  );
};

export default ShowValue;

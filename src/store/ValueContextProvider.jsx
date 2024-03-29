import React, { createContext, useState } from "react";

export const ValueContext = createContext({
  appValue: null,
  setAppValue: null,
});

const ValueContextProvider = ({ children }) => {
  const [appValue, setAppValue] = useState(0);

  return (
    <ValueContext.Provider
      value={{
        appValue,
        setAppValue,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export default ValueContextProvider;

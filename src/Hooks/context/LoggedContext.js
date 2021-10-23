import { createContext, useState } from "react";

export const LoggedContext = createContext(null);

export const LoggedProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  return (
    <LoggedContext.Provider value={{ logged, setLogged }}>
      {children}
    </LoggedContext.Provider>
  );
};

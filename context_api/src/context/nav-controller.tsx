import React, { useContext, useState } from "react";

const Context = React.createContext({
  collapsed: false,
  toggle: () => {},
});

export const useNav = () => useContext(Context);

const NavController = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(!collapsed);

  return (
    <Context.Provider value={{ collapsed, toggle }}>
      {children}
    </Context.Provider>
  );
};

export default NavController;

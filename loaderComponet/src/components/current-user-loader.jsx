import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

/*notes
CurrentUserLoader is a React component that takes children as props. children represents whatever child elements are passed between <CurrentUserLoader>...</CurrentUserLoader>.

 React.Children.map is used to iterate over each child element passed to CurrentUserLoader.
For each child, React.isValidElement(child) checks if it’s a valid React element (e.g., not plain text).
If the child is a valid element, React.cloneElement(child, { user }) is used to clone the child element and pass down the user data as a prop.
we can pass props as second argument to the  cloneElement() method.
This way, each child of CurrentUserLoader will receive the user data as a prop.
*/
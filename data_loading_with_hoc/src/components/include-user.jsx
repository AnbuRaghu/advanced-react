import { useEffect, useState } from "react";
import axios from "axios";
// it returns the componet along with the extrra prop in this case userid
export const includeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    });

    return <Component {...props} user={user} />;
  };
};

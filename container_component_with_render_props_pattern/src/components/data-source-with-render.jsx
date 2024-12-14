import { useEffect } from "react";
import { useState } from "react";

export const DataSourceWithRenderProps = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);


  // here we just call the render prop function which we get via prop
  return render(resource);

  /**
   * 
   * 
   * 
   * instead of this piece of code we  just use this   return render(resource);
   * 
   *   return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
   */

};

// Hoc COMPONETS USUALLY STARTS WITH LOWER CASE

export const checkProps = (Component) => {
  // IT ALway returns a props and the n return the component
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};

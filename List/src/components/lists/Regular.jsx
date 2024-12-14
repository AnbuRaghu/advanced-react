export const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};



// // 2. {...{ [sourceName]: item }}
// This part is where we’re passing props to ItemComponent dynamically. It uses JavaScript's object spread syntax (...) along with computed property names ([sourceName]: item). Here’s how it works:

// { [sourceName]: item } creates a new object where the property name is the value of sourceName, and the value is item.
// For example, if sourceName is "data", this object would be { data: item }.
// If sourceName is "info", it would create { info: item }.
// {...{ [sourceName]: item }} then spreads this object as props into ItemComponent.
// So if sourceName is "data", it’s equivalent to passing <ItemComponent data={item} />.
// If sourceName is "info", it’s equivalent to <ItemComponent info={item} />.
// Why use this pattern?
// This pattern allows RegularList to be flexible by passing items to ItemComponent under any specified prop name (sourceName). This way, RegularList can be used with different components that expect different prop names.
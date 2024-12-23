import React, { useCallback, useState } from "react";
import ExpensiveComponent from "./components/expensive-component";

const MemoizedEC = React.memo(ExpensiveComponent, (before, after) => {
  return before.btnLabel === after.btnLabel;
});

export default function App() {
  const [value, setValue] = useState<string>();

  const clickHandler = useCallback(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MemoizedEC btnLabel="click me!" onClick={clickHandler} />
    </>
  );
}

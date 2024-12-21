import ParentComponent from "./components/parent";
import mitt from "mitt";
// emitter package
export const emitter = mitt();

function App() {
  return (
    <>
      <ParentComponent />
    </>
  );
}

export default App;

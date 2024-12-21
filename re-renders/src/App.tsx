import { SlowComponent } from "./components/slow-component";
import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";
import ToggleButtonWithDialog from "./components/toggle-button";

export default function App() {
  return (
    <>
      <ToggleButtonWithDialog />
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}

import { SlowComponent } from "./components/slow-component";
import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";
import ToggleButtonWithDialog from "./components/toggle-button";
import useToggleDialog from "./hooks/useDialog";
import { Button } from "./components/button";
import { ModalDialog } from "./components/modal-dialog";

export default function App() {
  //This hook has a counter that triggers state update every 1 second.
  //To solve it you need to extract the Button and the ModalDialog in a smaller component
  //const { isVisible, show, hide } = useToggleDialog();
  return (
    <>
      <ToggleButtonWithDialog />
      {/* <Button onClick={show}>Show daialog</Button>
      {isVisible ? <ModalDialog onClose={hide} /> : null} */}
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}

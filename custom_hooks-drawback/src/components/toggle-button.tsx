import { Button } from "./button";
import { ModalDialog } from "./modal-dialog";
import useToggleDialog from "../hooks/useDialog";

const ToggleButtonWithDialog = () => {
  const { isVisible, show, hide } = useToggleDialog();

  return (
    <>
      <Button onClick={show}>Show dialog</Button>
      {isVisible && <ModalDialog onClose={hide} />}
    </>
  );
};

export default ToggleButtonWithDialog;

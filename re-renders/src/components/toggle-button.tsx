import { useState } from "react";
import { Button } from "./button";
import { ModalDialog } from "./modal-dialog";

const ToggleButtonWithDialog = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>Show dialog</Button>
      {visible && <ModalDialog onClose={() => setVisible(false)} />}
    </>
  );
};

export default ToggleButtonWithDialog;

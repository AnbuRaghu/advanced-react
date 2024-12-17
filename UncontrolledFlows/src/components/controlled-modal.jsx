import { useState } from "react";
import { styled } from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000067;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

export const ControlledModal = ({ shouldShow, close, children }) => {
  /// here we pass close and should show from the componet where it's called that's why it's controlled
  // not like this   const [show, setShow] = useState(false);

  return (
    <>
      {shouldShow && (
        <ModalBackground onClick={close}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={close}>Hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

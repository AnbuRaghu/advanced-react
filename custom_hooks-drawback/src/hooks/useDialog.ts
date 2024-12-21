import { useEffect, useState } from "react";
import useCounter from "./useCounter";


// this custom hooka are make code clean but the states used in this hook will be throught the app.. any change in this state causes still the component using this hpook to re render
const useToggleDialog = () => {
  const [visible, setVisible] = useState(false);

  useCounter();

  return {
    isVisible: visible,
    show: () => setVisible(true),
    hide: () => setVisible(false),
  };
};

export default useToggleDialog;

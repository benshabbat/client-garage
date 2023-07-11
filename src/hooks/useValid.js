import { useState } from "react";

const useValid = () => {
  const [isValid, setIsValid] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const onBlur = () => {
    setIsBlur(true);
  };

  return [isValid, setIsValid, onBlur, isBlur];
};
export default useValid;

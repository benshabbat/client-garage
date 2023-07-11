import { useState } from "react";

const useValidCar = (data=null) => {
  const CAR_REGEX = /^[0-9]{3}[-][0-9]{2}[-][0-9]{3}|[0-9]{2}[-][0-9]{3}[-][0-9]{2}|[0-9]{7,8}$/;

  const [isValidCar, setIsValidCar] = useState();
  if (
    (((data?.length === 8)||(data?.length === 7)) && +data) ||
    (data?.length === 10 &&data.at(3) === "-"&& data.at(6) === "-") ||
    (data?.length === 9 && data.at(2) === "-"&& data.at(6) === "-")
  ) {
    setIsValidCar(CAR_REGEX.test(data));
  } else setIsValidCar(false);
  return [isValidCar, setIsValidCar]
};
export default useValidCar;

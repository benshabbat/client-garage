import { useEffect, useState } from "react";
// import { validCar } from "../../validation/Valid";
const InputCar = ({ i, index, handleChange, isFocus }) => {
  const [isBlur, setIsBlur] = useState(false);
//   const [isValidCar, setIsValidCar] = useState(false);
//   useEffect(() => {
//     setIsValidCar(validCar(i?.value));
//     console.log("check")
//   }, [i?.value]);
  return (
    <label className="form-label">
      {!i.hidden && <span>{i?.name}</span>}
      {i?.isError && isBlur &&  (
        <span className="error">Your Car numer is wrong</span>
      )}
      <input
        pattern={i?.pattern}
        autoFocus={index === 0 && isFocus}
        placeholder={i?.name}
        type={i?.type}
        name={i?.name}
        value={i?.value}
        checked={i?.checked}
        min={i?.min}
        title={"Number of car must 00-000-00 OR 000-00-000"}
        hidden={i?.hidden}
        onChange={handleChange}
        aria-invalid={i?.invalid}
        required={i?.type !== "checkbox" ? true : false}
        autoComplete="off"
        onBlur={() => setIsBlur(true)}
      />
    </label>
  );
};

export default InputCar;

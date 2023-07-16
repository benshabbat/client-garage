import React, { useState, useRef } from "react";
import { valid } from "../../validation/Valid";
const Input = ({ i, index, handleChange, isFocus, isValid, isError }) => {
  const [isBlur, setIsBlur] = useState(false);
  const ref = useRef();
  return (
    <label className="form-label">
      {!i.hidden && <span>{i?.name}</span>}
      {!valid(ref?.current?.value, i?.name) && isBlur && (
        <span className="error">{i?.errorMessage}</span>
      )}
      <input
        ref={ref}
        pattern={i?.pattern}
        autoFocus={index === 0 && isFocus}
        placeholder={i?.name}
        type={i?.type}
        name={i?.name}
        value={i?.value}
        checked={i?.checked}
        min={i?.min}
        title={i?.title}
        hidden={i?.hidden}
        onChange={handleChange}
        aria-invalid={valid(ref?.current?.value, i?.name)}
        required={i?.type !== "checkbox" ? true : false}
        autoComplete="off"
        onBlur={() => setIsBlur(true)}
      />
    </label>
  );
};
export default Input;

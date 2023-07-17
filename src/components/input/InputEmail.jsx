import { useState, useRef } from "react";
import { valid } from "../../validation/Valid";
const InputEmail = ({ i, index, handleChange, isFocus }) => {
  const ref = useRef();
  const [isBlur, setIsBlur] = useState(false);
  return (
    <label className="form-label">
      {!i.hidden && <span>{i?.name}</span>}
      {!valid(ref?.current?.value,i?.name) && isBlur && (
        <span className="error">Your Email is wrong</span>
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
        title={"regex@gmail.com"}
        hidden={i?.hidden}
        onChange={handleChange}
        aria-invalid={valid(ref?.current?.value,i?.name) }
        required={i?.type !== "checkbox" ? true : false}
        autoComplete="off"
        onBlur={() => setIsBlur(true)}
      />
    </label>
  );
};

export default InputEmail
import React, { useState } from "react";

const Input = ({ i, index, handleChange, isFocus,isValid,isError }) => {
    const [isBlur, setIsBlur] = useState(false);
    return (
      <label className="form-label">
        {!i.hidden && <span>{i?.name}</span>}
        {isError && isBlur && <span className="error">{i?.errorMessage}</span>}
        <input
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
          aria-invalid={isValid}
          required={i?.type !== "checkbox" ? true : false}
          autoComplete="off"
          onBlur={() => setIsBlur(true)}
        />
      </label>
    );
  };
export default Input
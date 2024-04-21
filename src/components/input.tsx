import React from 'react';
import { ReactElement } from 'react';

export default function Input({
  title,
  inputValue,
  setInputValue,
  inputType = 'number',
  min = 0,
  max = 200,
}): ReactElement {
  function handleChange(event) {
    const { value } = event.target;
    const numericValue = parseFloat(value);

    // Check if the input is empty or within the specified range and is a valid number
    if (
      value === '' ||
      (numericValue >= min && numericValue <= max && /^\d*\.?\d*$/.test(value))
    ) {
      setInputValue(Number(value));
    }
  }

  return (
    <div id="input-group">
      <label id="label">{title}</label>
      <input
        id="input"
        value={inputValue}
        onChange={handleChange}
        type={inputType}
        min={min}
        max={max}
      />
    </div>
  );
}

import React from 'react';
import { ReactElement } from 'react';

export default function Input({
  title,
  inputValue,
  setInputValue,
}): ReactElement {
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div id="input-group">
      <label id="label">{title}</label>
      <input id="input" value={inputValue} onChange={handleChange} />
    </div>
  );
}

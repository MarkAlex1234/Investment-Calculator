import React from 'react';
import { ReactElement } from 'react';

const HEADER_IMG_SRC = `/investment-calculator-logo.png`;
const HEADER_TITLE = `React Investment Calculator`;

export default function Header(): ReactElement {
  return (
    <header id="header">
      <img src={HEADER_IMG_SRC} />
      <h1>{HEADER_TITLE}</h1>
    </header>
  );
}

import React from 'react';
import { ReactElement } from 'react';

const THEAD_TITLES = [
  'Year',
  'Investment Value',
  'Interest (Year)',
  'Total Interest',
  'Invested Capital',
];

export default function ResultsTable(): ReactElement {
  return (
    <table id="result">
      <thead id="thead">
        <tr>
          {THEAD_TITLES.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
          <td>X</td>
        </tr>
      </tbody>
    </table>
  );
}

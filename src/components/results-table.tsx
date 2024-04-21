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
    <div id="result">
      <table>
        <thead id="thead">
          {THEAD_TITLES.map((title) => (
            <>
              <th>{title}</th>
            </>
          ))}
        </thead>
      </table>
    </div>
  );
}

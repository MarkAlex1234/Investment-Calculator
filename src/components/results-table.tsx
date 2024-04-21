import React, { useContext } from 'react';
import { ReactElement } from 'react';
import { InvestmentContext } from './investment-provider';
import { calculateInvestmentResults } from '../util/investment';

const THEAD_TITLES = [
  'Year',
  'Investment Value',
  'Interest (Year)',
  'Total Interest',
  'Invested Capital',
];

export default function ResultsTable(): ReactElement {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    useContext(InvestmentContext);

  const annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

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

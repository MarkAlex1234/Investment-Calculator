import React, { ReactElement, useContext } from 'react';
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
        {annualData.map((yearData) => (
          <tr>
            <td>{yearData.year}</td>
            <td>{yearData.interest}</td>
            <td>{yearData.annualInvestment}</td>
            <td>{yearData.valueEndOfYear}</td>
            <td>{initialInvestment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

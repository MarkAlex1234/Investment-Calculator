import React, { ReactElement, useContext } from 'react';
import { InvestmentContext } from './investment-provider';
import { calculateInvestmentResults, formatter } from '../util/investment';

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

  // Calculating the total interest accumulated over the years
  let totalInterest = 0;
  let investedCapital = 0;

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
        {annualData.map((yearData) => {
          totalInterest += yearData.interest;
          investedCapital =
            initialInvestment + annualInvestment * yearData.year;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

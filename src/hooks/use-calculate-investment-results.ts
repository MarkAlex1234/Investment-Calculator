import { useContext } from 'react';
import { InvestmentContext } from '../components/investment-provider';
import { calculateInvestmentResults } from '../util/investment';

export default function useCalculateInvestmentResults() {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    useContext(InvestmentContext);

  const annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  return annualData;
}

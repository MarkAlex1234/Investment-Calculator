import React, { useContext, useState } from 'react';
import Input from './input';
import { InvestmentContext } from './investment-provider';

const INPUT_GROUP_TITLES = [
  'INITIAL INVESTMENT',
  'ANNUAL INVESTMENT',
  'EXPECTED RETURN (Min: 0, Max: 200)',
  'DURATION IN YEARS (Min: 0, Max: 20)',
];

const MAX_DURATION_IN_YEARS = 20;

export default function UserInput() {
  const {
    initialInvestment,
    setInitialInvestment,
    annualInvestment,
    setAnnualInvestment,
    expectedReturn,
    setExpectedReturn,
    duration,
    setDuration,
  } = useContext(InvestmentContext);

  return (
    <div id="user-input">
      <Input
        title={INPUT_GROUP_TITLES[0]}
        inputValue={initialInvestment}
        setInputValue={setInitialInvestment}
      />
      <Input
        title={INPUT_GROUP_TITLES[1]}
        inputValue={annualInvestment}
        setInputValue={setAnnualInvestment}
      />
      <Input
        title={INPUT_GROUP_TITLES[2]}
        inputValue={expectedReturn}
        setInputValue={setExpectedReturn}
      />
      <Input
        title={INPUT_GROUP_TITLES[3]}
        inputValue={duration}
        setInputValue={setDuration}
        max={MAX_DURATION_IN_YEARS}
      />
    </div>
  );
}

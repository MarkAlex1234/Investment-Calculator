import React, { useState } from 'react';
import Input from './input';

const INPUT_GROUP_TITLES = [
  'INITIAL INVESTMENT',
  'ANNUAL INVESTMENT',
  'EXPECTED RETURN',
  'DURATION',
];

export default function UserInput() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

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
      />
    </div>
  );
}

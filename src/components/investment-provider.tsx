import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

// Define the type for the context value
interface InvestmentContextType {
  initialInvestment: number;
  setInitialInvestment: Dispatch<SetStateAction<number>>;
  annualInvestment: number;
  setAnnualInvestment: Dispatch<SetStateAction<number>>;
  expectedReturn: string;
  setExpectedReturn: Dispatch<SetStateAction<string>>;
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

// Create the context with default values
export const InvestmentContext = createContext<InvestmentContextType>({
  initialInvestment: 1000,
  setInitialInvestment: () => {},
  annualInvestment: 100,
  setAnnualInvestment: () => {},
  expectedReturn: '5.5',
  setExpectedReturn: () => {},
  duration: 12,
  setDuration: () => {},
});

// Create a provider component
export const InvestmentProvider = ({ children }) => {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [annualInvestment, setAnnualInvestment] = useState(100);
  const [expectedReturn, setExpectedReturn] = useState('5.5');
  const [duration, setDuration] = useState(12);

  return (
    <InvestmentContext.Provider
      value={{
        initialInvestment,
        setInitialInvestment,
        annualInvestment,
        setAnnualInvestment,
        expectedReturn,
        setExpectedReturn,
        duration,
        setDuration,
      }}
    >
      {children}
    </InvestmentContext.Provider>
  );
};

import Header from './components/header';
import UserInput from './components/user-input';
import ResultsTable from './components/results-table';
import { InvestmentProvider } from './components/investment-provider';

function App() {
  return (
    <>
      <Header />
      <InvestmentProvider>
        <UserInput />
        <ResultsTable />
      </InvestmentProvider>
    </>
  );
}

export default App;

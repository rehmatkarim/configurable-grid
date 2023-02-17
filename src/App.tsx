import './App.css';
import Grid from './Components/Grid/Grid';

function App() {
  const columns = [{ label: 'Name', key: 'name', type: 'string' },
  { label: 'Date', key: 'date', type: 'date' },
  { label: 'Category', key: 'category', type: 'string' },
  { label: 'Amount', key: 'amount', type: 'number' },
  { label: 'Created At', key: 'created_at', type: 'date' }];

  const apiURl = "https://us-central1-fir-apps-services.cloudfunctions.net/transactions";

  return (
    <div className="App">
      <h1>Configurable grid</h1>
      <Grid columns = {columns} api= {apiURl} ListTitleColumn= {"category"} ListSubTitleColumn= {"amount"} positiveColor="green" negativeColor="red"/>
    </div>
  );
}

export default App;

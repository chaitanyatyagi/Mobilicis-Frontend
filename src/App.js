import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectBasicExample from './components/SelectBasicExample';
import MainTable from './components/MainTable';

function App() {
  return (
    <div className="App">
      <div className='head'>Mobilicis India Private Limited</div>
      <SelectBasicExample />
      <MainTable />
    </div>
  );
}

export default App;

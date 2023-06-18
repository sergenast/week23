import'./App.css';
import Rate from './components/Rate';
import rates from './components/rateData';

function App() {
  return (
    <div className="App">
      {
        rates.map((rate) =>
        <Rate title = {rate.title} backgroundColor = {rate.backgroundColor} price = {rate.price} speed ={rate.speed} theBestRate = {rate.theBestRate}></Rate>)
      }
    </div>
  );
}

export default App;

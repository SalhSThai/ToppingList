
import './App.css';
import { formatThaiCurrency } from './services/numberFormat';
import { useState } from 'react';

const info = [
  { id: 0, name: "Capsicum", price: "1.2", check: false },
  { id: 1, name: "Paneer", price: "2", check: false },
  { id: 2, name: "Red Paprika", price: "2.5", check: false },
  { id: 3, name: "Onions", price: "3", check: false },
  { id: 4, name: "Extra Cheese", price: "3.5", check: false },
  { id: 5, name: "Baby Corns", price: "3", check: false },
  { id: 6, name: "Mushroom", price: "2", check: false },
]


function App() {
  const [sum, setSum] = useState(0);
  function onChange(event) {
    setSum(0);
    info.map(item => {
      if (item.id == event.target.id) {
        item.check = event.target.checked;
        if (item.check === true) {
          setSum(sum + Number(item.price))
        }
        else { setSum(sum - Number(item.price)) }
      }
      return item;
    })
  }
  return (
    <div className="border border-dark border-1 rounded position-absolute top-50 start-50 translate-middle p-3 " >
      <h1>Select Topping</h1>
      <div className="scrollHide block-60v">
        {info.map(item =>
        (<div className="d-flex m-1 p-2 bg-info bg-opacity-10 border border-dark rounded border-2 justify-content-between ">
          <input className="m-1" type="checkbox" id={item.id} name={item.name} value={item.price} onChange={onChange} />
          <label className="flex-fill" htmlFor={item.name}>{item.name}</label>
          <div style={{ width: "50px", textAlign: "center" }}>{formatThaiCurrency(item.price, 'THB')}</div>
        </div>)
        )}
        </div>
        <div className="d-flex mx-3 my-2 p-2 border-1  border-top border-dark  justify-content-between">
          <div className="flex-fill" >Total</div>
          <div className={sum > 0 ? `text-danger` : null}>{formatThaiCurrency(sum, 'THB')}</div>
        </div>
      
    </div >
  );
}

export default App;

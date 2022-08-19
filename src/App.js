import './App.css';
import { useState } from 'react';
import { shoppingList } from './item/shoppingList';
import ItemBlock from './Component/ItemBlock';
import TotalResult from './Component/TotalResult';
import AddBlock from './Component/AddBlock';
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Imported Zone ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//


function App() {
  // ==================================== useState & variable Zone =============================================//
  const [shoppingItem, setShoppingItem] = useState([...shoppingList])
  const [sum, setSum] = useState(0);
  const [addBlock,setAddBlock] = useState(false);

  // ==================================== useState & variable Zone ============================================//
  // ==================================== function Zone ======================================================//
  // function onCheck ของ Component Item Block
  function onCheck(event) {
    setSum(0);
    shoppingItem.map(item => {
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
  // function onAdd ของ icon Add 
  function onAdd() {
    console.log('add');
    setAddBlock(true);
  }
  // function onClose ของ icon close บน Component AddBlock
  function onClose(){
    setAddBlock(false)
  }
  // function onClose ของ icon close บน Component AddBlock
  function textChange(){

  }
  // ====================================END function Zone ======================================================//
  return (
    <div className="border border-dark border-1 rounded position-absolute top-50 start-50 translate-middle p-3 " >
      <div className="d-flex justify-content-between align-items-center ">
        <h1>Select Topping</h1>
        <button className="btn btn-outline-success" onClick={onAdd}>
          <i class="fa-solid fa-plus " />
        </button>
      </div>
      <div className="scrollHide block-60v">
      <div>{(addBlock)?(<AddBlock onClose={onClose} onChange={textChange}/>):null}</div>
        {shoppingItem.map(item =>
          <ItemBlock id={item.id} name={item.name} price={item.price} onCheck={onCheck} />)}
      </div>
      <TotalResult sum={sum} />
    </div >
  );
}

export default App;

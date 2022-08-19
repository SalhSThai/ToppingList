import { formatThaiCurrency } from '../services/numberFormat';
function ItemBlock({id,name,price,onCheck}){


   return  (<div className="d-flex m-1 p-2 bg-info bg-opacity-10 border border-dark rounded border-2 justify-content-between ">
          <input className="m-1" type="checkbox" id={id} name={name} value={price} onChange={onCheck} />
          <label className="flex-fill" htmlFor={name}>{name}</label>
          <div style={{ width: "50px", textAlign: "center" }}>{formatThaiCurrency(price, 'THB')}</div>
        </div>);
}
export default ItemBlock;
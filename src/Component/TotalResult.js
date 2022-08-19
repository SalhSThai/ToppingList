import { formatThaiCurrency } from '../services/numberFormat';
function TotalResult({sum}) {

    return (
        <div className="d-flex mx-3 my-2 p-2 border-1  border-top border-dark  justify-content-between">
            <div className="flex-fill" >Total</div>
            <div className={sum > 0 ? `text-danger` : null}>{formatThaiCurrency(sum, 'THB')}</div>
        </div>
    );
}
export default TotalResult;
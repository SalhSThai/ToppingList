import { useState } from 'react';

function AddBlock({ id, input, onClose, onChange }) {
    const [text,setText] = useState('')

    return (<>
        {/* <input type="text"></input> */}
        <div className="d-flex m-1 p-2 bg-info bg-opacity-10 border border-dark rounded border-2 justify-content-between ">
            <input className="m-1 flex-fill" type="text" id='addBox' name='addBox' value='' onChange={onChange} />
            <button className="btn btn-outline-success m-1" >
                <i class="fa-solid fa-check " />
            </button>
            <button className="btn btn-outline-danger m-1" onClick={onClose}>
                <i class="fa-solid fa-xmark " />
            </button>
        </div>


    </>);
}
export default AddBlock;
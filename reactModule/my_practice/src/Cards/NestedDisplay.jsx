

import '../style.css';

function NestedDisplay({counting}){
    return(
        <>
        <h3>Grand Children</h3>
        <div className='btnStyle'>

        {counting}
        </div>
        </>
    )
}
export default NestedDisplay;
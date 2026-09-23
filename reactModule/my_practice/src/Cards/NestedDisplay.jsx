

import {use} from 'react'
import '../style.css';
import { CounterContext } from '../Providers/Counter.Provider';

// function NestedDisplay({counting}){
//     return(
//         <>
//         <h3>Grand Children</h3>
//         <div className='btnStyle'>

//         {counting}
//         </div>
//         </>
//     )
// }
// export default NestedDisplay;


//! Context API

function NestedDisplay(){
    const {counting} = use(CounterContext)
    return(
        <>
        <div className='btnStyle'>
        <h3>Grand Children</h3>

        {counting}
        </div>
        </>
    )
}
export default NestedDisplay;
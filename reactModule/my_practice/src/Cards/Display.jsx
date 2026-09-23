import '../style.css'
import NestedDisplay from './NestedDisplay';

// function Display({counting}){
//     // console.log('display')
//     return (
//         <>
//         <h3>Children</h3>
//         <div className='style2'>
//            {/* {counting} */}
//            {/* {setCounting} // no need */}
//         <NestedDisplay counting={counting}/>
//         </div>
//         </>
//     )
// }

// export default Display;


//! context API

function Display(){
    // console.log('display')
    return (
        <>
        <div className='style2'>
        <h3>Children</h3>
           {/* {counting} */}
           {/* {setCounting} // no need */}
        <NestedDisplay/>
        </div>
        </>
    )
}

export default Display;


// import { useState } from 'react'
import '../style.css'


function Count2({counting, setCounting}){
    // console.log('count')
    // const [counting, setCounting] = useState('');
    

    const counter = () => {
        setCounting(counting + 1)
    }

    const icrementByValue = (value) => {
        setCounting(counting + value)
    }

    const handleDecrement = () => {
        if (counting > 0) {
            setCounting(counting - 1)
        }
    }
    const handleDecrementByValue = (value) => {
        if (counting > 0) {
            setCounting(counting - value)
        }
    }
    return(
        <>
        <div className='style'>
            <h2>Children</h2>
            <button onClick={counter} className="btnStyle">Increment</button>
            {/* <button onClick={() => counter(counting)}>Increment</button> */}
            {/* {counting} */}
            
            {/* <button onClick={() => {setCount(counting - 1)}}>Decrement</button> */}
            <button onClick={handleDecrement} className="btnStyle">Decrement</button>
            
            {/* <button onClick={() => {setCount(counting + 5)}}>Increment by set value.</button> */}
            <button onClick={() => icrementByValue(5)} className="btnStyle">Increment by set value.</button>
            
            {/* <button onClick={() => {setCount(counting - 5)}}>Decrement by set value.</button> */}
            <button onClick={() => handleDecrementByValue(5)} className="btnStyle">Decrement by set value.</button>
        </div>
        </>
    )
}

export default Count2;
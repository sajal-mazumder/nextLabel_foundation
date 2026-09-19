

import '../style.css'


function Count2(counting, setCount){
    // console.log('count')
    

    const counter = () => {
        setCount(counting + 1)
    }

    const icrementByValue = (value) => {
        setCount(counting + value)
    }

    const handleDecrement = () => {
        if (counting > 0) {
            setCount(counting - 1)
        }
    }
    const handleDecrementByValue = (value) => {
        if (counting > 0) {
            setCount(counting - value)
        }
    }
    return(
        <>
        <h2 className="style">count</h2>
        <button onClick={counter} className="btnStyle">Increment</button>
        {/* <button onClick={() => counter(counting)}>Increment</button> */}
        
        {/* <button onClick={() => {setCount(counting - 1)}}>Decrement</button> */}
        <button onClick={handleDecrement} className="btnStyle">Decrement</button>
        
        {/* <button onClick={() => {setCount(counting + 5)}}>Increment by set value.</button> */}
        <button onClick={() => icrementByValue(5)} className="btnStyle">Increment by set value.</button>
        
        {/* <button onClick={() => {setCount(counting - 5)}}>Decrement by set value.</button> */}
        <button onClick={() => handleDecrementByValue(5)} className="btnStyle">Decrement by set value.</button>
        </>
    )
}

export default Count2;
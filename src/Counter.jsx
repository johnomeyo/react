import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(c => c + 1);
    }
    const decrement = () => {
        setCount(c => c - 1);
    }
    const resetCount = () => {
        setCount(c => c = 0);

        //setCount(0) would work too
    }
    return (
        <div className='counter-container'>
            <p className='counter-display'>{count}</p>
            <p></p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={resetCount}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>
        </div>
    );
}
export default Counter;
"use client"
import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count+1)} >increased</button>
            <span>{count}</span>
            <button onClick={ () => setCount(count - 1)}>Decreased</button>
        </div>
    );
};

export default Counter;
import { useState } from "react";

export function Counter() {

    const [count, setCount] = useState(0);

    function Decrement() {
        setCount(count - 1);
    }

    function Reset() {
        setCount(0);
    }

    function Increment() {
        setCount(count + 1);
    }

    return (
        <div className="counter-card">
            <h1 className="count">{count}</h1>
            <button className="decrement-btn" onClick={Decrement}>Decrement</button>
            <button className="reset-btn" onClick={Reset}>Reset</button>
            <button className="increment-btn" onClick={Increment}>Increment</button>
        </div>
    )
}
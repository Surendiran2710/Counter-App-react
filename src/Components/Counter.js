import { useState } from "react"


function Counter() {
    var [count, setcount] = useState(0)

    function increment() {
        setcount(count + 1)
    }
    function decrement() {
        setcount(count - 1)
    }
    function reset() {
        setcount(0)
    }
    return (
        <>
    
            <div className="container-counter">
                <div className="counter">
                    <h1 className="counter-name">Counter App</h1>
                    <h1 className="counter-name_1">{count}</h1>
                    <div className="counter-button" >
                        <button className="counter-button_1" onClick={increment}>Increment +</button>
                        <button className="counter-button_2" onClick={decrement}>Decrement -</button>
                        <button className="counter-reset" onClick={reset}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
import { useState } from "react";
import './counter.css'


function Counter() {
    let [count, setCount] = useState(0);
    function increament() {
        setCount(count+1)
    }
    function decreament() {
        setCount(count-1)
    }
    function darken(event){
       event.target.style.setProperty("border", "3px solid black")
    }
    function remDarken(event){
        event.target.style.setProperty("border", "1px solid black")
    }
    return (
        <div className="container" id="container">
            <div className="display" id="display">{count}</div>
            <button onClick={increament} onFocus={darken} onBlur={remDarken} id="increament">Increament</button>
            <button onClick={decreament} onFocus={darken} onBlur={remDarken} id="decreament">Decreament</button>
        </div>
    )
}

export default Counter
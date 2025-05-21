import { useMemo, useState } from "react"
import useCustomMemo from "./hooks/useCustomMemo";
import './styles.css'

export default function App(){
    const[count,setCount] = useState(0);
    const[count2,setCount2] = useState(100);

    const expensive =()=>{
        console.log("expensive function");
        return count*count;
    }

    const memoized = useCustomMemo(expensive,[count]); //returns a value

    return <div className="wrapper">
        <div className="expensive">
        <h1>{count}</h1>
        <h1>{memoized}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        </div>

        <div className="non-expensive">
        <h1>{count2}</h1>
        <button onClick={()=>setCount2(count2-1)}>-</button>
        </div>
    </div>
}
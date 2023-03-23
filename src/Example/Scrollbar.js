import React,{useState} from "react";

export default function Scrollbar() {

    const [count, setCount] = useState(0);

    const countUpdte = ()=> {
        setCount(count+1)
        console.log(count);
    }

    const addcount = () => {
        setCount(count+1)
    }

  return (
    <>
      <div>
      <div style={{height:"100px"}} onScroll={()=>countUpdte()}>Scrollbar{count}</div>
      <button onClick={addcount}>addcount</button>
      </div>
    </>
  );
}

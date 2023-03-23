import React,{useState} from 'react'

export default function Nextpre() {

    const [count, setCount] = useState(1);

    const checkobj = [{
        id: 1,
        name: "test1",
        desc: "Laboris non nisi pariatur mollit."
      },
      {
        id: 2,
        name: "test2",
        desc: "Laboris non nisi pariatur mollit."
      },
      {
        id: 3,
        name: "test3",
        desc: "Laboris non nisi pariatur mollit."
      },
      {
        id: 4,
        name: "test4",
        desc: "Laboris non nisi pariatur mollit."
      }]

      const pre = () => {
        if (count > 1){
            setCount(count - 1)
        }
        else {
            alert("this is last page")
        }
      }


      const next = () => {
        if (count < checkobj.length){
            setCount(count + 1)
        }
        else {
            alert ("this is last page")
        }
      }
  return (
    <>
    <button onClick={pre} >Previous</button>
    {checkobj.map((item)=>{
        return(
        <>
     {count == item.id &&  (<> <h1>{item.id}</h1>
        <h1>{item.name}</h1>
        <h1>{item.desc}</h1></>)}
        </>
        )
    })}
    <button onClick={next}>Next</button>
    </>
  )
}

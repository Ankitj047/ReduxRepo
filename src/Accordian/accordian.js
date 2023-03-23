import React, { useState } from "react";
import "./accordion.css"

export default function Accordian() {

const[isAccordion, SetisAccordion] = useState(true)
const [id, setID] = useState()
//   const [isAccordion1, setIsAccordion1] = useState(true);
//   const [isAccordion2, setIsAccordion2] = useState(false);
//   const [isAccordion3, setIsAccordion3] = useState(false);

//   const setacc1 = () => {
//     setIsAccordion1(!isAccordion1);
//     setIsAccordion2(false);
//     setIsAccordion3(false);
//   };

//   const setacc2 = () => {
//     setIsAccordion1(false);
//     setIsAccordion2(!isAccordion2);
//     setIsAccordion3(false);
//   }

//   const setacc3 = () => {
//     setIsAccordion1(false);
//     setIsAccordion2(false);
//     setIsAccordion3(!isAccordion3);
//   }


const setacc = (id) => {
    setID(id)
SetisAccordion(true)
}

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
  return (
    <>
      {/* <div onClick={setacc1} className={isAccordion1 && "check"}>HI Click 1{isAccordion1 ? ">" : "^"}</div>
      {isAccordion1 && (
        <h1>Tempor reprehenderit officia pariatur nisi aute.</h1>
      )}
      <div onClick={setacc2} className={isAccordion2 && "check"} >HI Click 2{isAccordion2 ? ">" : "^"}</div>
      {isAccordion2 && (
        <h1>Tempor reprehenderit officia pariatur nisi aute.</h1>
      )}
      <div onClick={setacc3}className={isAccordion3 && "check"}>HI Click 3{isAccordion3 ? ">" : "^"}</div>
      {isAccordion3 && (
        <h1>Tempor reprehenderit officia pariatur nisi aute.</h1>
      )} */}
      {
        checkobj.map((item)=> {
            return(
                <>
                <div onClick={()=>setacc(item.id)}>{item.name}</div>
                {isAccordion && item.id === id && (
                    <h1>{item.desc}</h1>
                  )}
                  </>
            )
        })
      }
    </>
  );
}

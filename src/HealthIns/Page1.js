import axios from "axios";
import React, { useState, useEffect } from "react";
import { getNormaHealth } from "../api";
import {useDispatch, useSelector}  from 'react-redux';
import { getdata } from "../actions/learnaction";

export default function Page1() {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState();
  const dispatch = useDispatch()
  const apidata = useSelector((state)=> state.auth.dieseasget);

  useEffect(() => {
    // getNormaHealth
    //   .then((resp) => setData(resp.data[0].normal))
    //   .catch((error) => console.log(error));
    dispatch(getdata())
    setTimeout(() => {
      setData(apidata.data[0].normal)
      console.log(apidata);
   }, 3000); 
  }, []);


  const Clicked = (id) => {
    // setCheck(!check);
    let newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ischeck: !item.ischeck,
        };
      } else {
        return item;
      }
    });
    setData(newData);
    // setCount(id)
  };

  return (
    <>
      <div>Working</div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            {/* <div>{item.normal1}</div>
                <div>{item.normal2}</div>
                <div>{item.normal3}</div> */}
            <label>{item.disease}</label>
            <input
              type="checkbox"
              id={item.id}
              value={item.ischeck}
                checked={item.ischeck[item.id]}
              onClick={(id) => Clicked(item.id)}
            />
            {item.ischeck === true && (
              <>
                <label>Yes</label>
                <input
                  type="checkbox"
                  id={item.id}
                  //   onClick={(id)=>Clicked(item.id)}
                />
                <label>NO</label>
                <input
                  type="checkbox"
                  id={item.id}
                  //   onClick={(id)=>Clicked(item.id)}
                />
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

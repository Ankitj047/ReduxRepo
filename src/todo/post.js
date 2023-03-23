import axios from "axios";
import React, { useState } from "react";
import { apicall } from "../api";
import {useNavigate} from "react-router-dom"

const initialState = {
  task: "",
  id: "",
};
export default function Post() {
    let URL = apicall;
    const navigate = useNavigate()
  const [data, setData] = useState(initialState);

  function AddData() {
    axios.post(URL,data)
    navigate('/')
}
  return (
    <>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, task: e.target.value })}
        placeholder="Please Enter name here"
      />
      <button onClick={AddData}>Add Data</button>
    </>
  );
}

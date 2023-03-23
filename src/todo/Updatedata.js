import React,{useState, useEffect} from 'react'
import { Link, navigate } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import { apicall } from '../api';
import axios from 'axios';

const initialstate = {
task: "",
id: ""
}
export default function Updatedata() {
  let URL = apicall
  const {state} = useLocation()
  const navigate = useNavigate()

useEffect (()=>{
  setData({...data, task: state.task, id: state.id})
},[])

  const [data, setData] = useState(initialstate)
  
const udpate = (id) => {
  axios.put(`http://localhost:3000/todo/${data.id}`,data)
  navigate('/')
}

  return (
<>
<input type="text" value={data.task} onChange={(e)=>setData({...data, task:e.target.value})}/>
<button onClick={udpate}>Update Data</button>
</>
  )
}

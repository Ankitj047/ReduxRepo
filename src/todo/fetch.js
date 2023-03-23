import React, { useEffect, useState } from "react";
import { apicall } from "../api";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export default function Fetch() {
  let URL = apicall;
  const [getdata, setGetdata] = useState([]);
  const [postdata, setPostdata] = useState("");
  const [uid, setID] = useState();
  const [showdiv, setShowdiv] = useState(false);
  const [forsearch, setForsearch] = useState('')

  const getapidata = () => {
    let arr = []
    axios
      .get(URL)
      .then((resp) => setGetdata(resp.data))
      .catch((err) => console.log(err));
  };

  const deleteapi = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then((resp) => getapidata())
      .catch((err) => err);
  };

  const putapidata = () => {
    var data = {
      task: postdata,
    };
    axios
      .put(`http://localhost:3000/todo/${uid}`, data)
      .then((resp) => getapidata())
      .catch((err) => err);
  };

  useEffect(() => {
    getapidata();
  }, []);

  const seachClick = () => {
    if (forsearch !== ""){
let checka = getdata.filter((item)=>JSON.stringify(item).toLowerCase().indexOf(forsearch.toLowerCase()) !=-1)
setGetdata(checka)}
else {
  getapidata()
}
  }

  return (
    <>
      <center>
        <div className="updateall">
        <div className="container">
        <input type='text' onChange={(e)=> setForsearch(e.target.value)} />
    <button onClick={seachClick}>Search</button>
  <button><Link to="/post">Add data</Link></button>  
        </div>
       
          {getdata.map((item) => {
            return (
              <>
                <div className="showModal-container">
                  <div className="container ">
                    <div className="row">
                      <div className="col-1">{item.id}</div>
                      <div className="col-1">{item.task}</div>
                      <div className="col-10">
                      <div className="container">
                        <div className="row justify-content-end">
                        <div className="col-3">
                          <button onClick={() => deleteapi(item.id)}>
                            Delete
                          </button>
                        </div>
                        <div className="col-4">
                            <Link to="/udpate" state={item}>
                            Put Data
                          </Link>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

      
      </center>
    </>
  );
}

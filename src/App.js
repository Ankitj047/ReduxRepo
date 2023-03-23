import React from "react";
import "./App.css";
import Fetch from "./todo/fetch";
import Post from "./todo/post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Updatedata from "./todo/Updatedata";
import Accordian from "./Accordian/accordian";
import Scrollbar from "./Example/Scrollbar";
import Nextpre from "./Example/Nextpre";
import Loader from "./Example/Loader";
import Page1 from "./HealthIns/Page1";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fetch />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/udpate" element={<Updatedata />}></Route>
        <Route path="/accordion" element={<Accordian />}></Route>
        <Route path="/scrollbar" element={<Scrollbar/>}></Route>
        <Route path="/prenext" element={<Nextpre/>}></Route>
        <Route path="/loader" element={<Loader/>}></Route>
        <Route path="page1" element={<Page1/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

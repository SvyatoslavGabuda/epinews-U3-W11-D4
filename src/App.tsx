import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import Fetch from "./components/Fetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ArticleDetails />} />
        </Routes>
        {/* <Fetch /> */}
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;

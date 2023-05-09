import './App.css';

import React, {useState}  from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = ()=>{
  const pageSize=5;
   
  const [progress, setProgress]= useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" catagory="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business"pageSize={5} country="in" catagory="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" catagory="entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" catagory="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" catagory="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" catagory="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" catagory="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" catagory="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  
}

export default App;
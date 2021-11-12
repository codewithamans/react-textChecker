// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";


// import TextForm from "./component/TextForm";
function App() {
  const [mode, setmode] = useState("light");
  let togglemode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#343a40'
      document.title='hello'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.title='hihi'
    } 
  }
  return (
    <>
    <Router>

      <Navbar title= "TextChecker" mode={mode} togglemode = {togglemode}/>
      <Switch>
          <Route exact path="/about">
            <div className="container">

            <About />
            </div>
          </Route>
          
          <Route exact path="/">
          <TextForm mode = {mode}/>
          </Route>
        </Switch>
    </Router>
       
    </>
  );
}
export default App;

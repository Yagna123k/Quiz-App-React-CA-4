import React, {useState, useEffect } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Home from "./components/Home";



function App() {

  const [screen, setScreen] = useState(1)
  const [marks, setMarks] = useState(0)
  const [Dark, setDark] = useState(true)

  useEffect(() => {
    document.body.style.backgroundColor = Dark ? '#121212' : '#fff';
    document.body.style.color = Dark ? '#fff' : '#000';
  }, [Dark]);

  return <>
  
    <div>
      {screen===1 ? <Home setScreen={setScreen} setDark={setDark} Dark={Dark}/> : screen===2?<QuestionBox setScreen={setScreen} setMarks={setMarks} marks={marks} setDark={setDark} Dark={Dark}/>:<Result setScreen={setScreen} marks={marks} setDark={setDark} Dark={Dark} setMarks={setMarks}/>}      
    </div>
    </>
}

export default App;
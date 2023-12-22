import React from 'react'
import Navbar from './Navbar'

export default function Result({setScreen, marks, setDark, Dark, setMarks}) {

  const divDarkStyle={
    backgroundColor: Dark? '#2C2C2C' : '#FFF9E4',
    color: Dark? '#fff' : '#000',
    border: Dark?'5px solid #43DD65':'5px solid #000'
  }

  const restartStyle={
    border:'4px solid #163959',
    background:'#3C9BF2',
    boxShadow: '2px 2px 0px 0px #163959',
    color: '#163959'
    }

  return (
    <div>
      <Navbar setDark={setDark} Dark={Dark}/>
      <div className='questionBox' style={divDarkStyle}>

        <h1 style={{color: '#43DD65'}}>Result</h1>
        <h2 style={{fontSize:'50px',color:'inherit'}}>{marks} out of 15 Questions are Correct</h2>
        <h2 style={{color:'inherit'}}>You scored {parseInt((marks/15)*100)}%</h2>
        <h3 className='phrase' style={{color:'#F03986'}}>{marks===15?"Outstanding! You scored 15 out of 15. You've truly excelled in this quiz  great job!":marks >10?"Well done! you can improve":marks>=5?"Good Effort! Keep challenging yourself, and you'll see progress!":'You have to work hard'}</h3>
        <div className='highlights'>

          <button className='Home' onClick={()=>{
            setMarks(0)
            setScreen(1)
          }}>Home</button>
          <button className='ReStart' style={restartStyle} onClick={()=>{
            setMarks(0)
            setScreen(2)
          }}>Restart</button>
          </div>
      </div>
    </div>
  )
}

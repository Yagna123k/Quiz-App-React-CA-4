import React, {useState} from 'react'
import Navbar from './Navbar'
import questions  from '../questions'

export default function QuestionBox({setScreen,setMarks,marks, setDark, Dark}) {

  const [num, setNum] = useState(0)
  const [ishilight, setHilight] = useState(false)

  const divdarkstyle={
    backgroundColor: Dark? '#2C2C2C' : '#FFF9E4',
    color: Dark? '#fff' : '#000',
    border: Dark?'5px solid #43DD65':'5px solid #000'
  }

  return <>
  <Navbar setDark={setDark} Dark={Dark}/>
  {num<questions.length?<div className='questionBox' style={divdarkstyle}>
    <h4>Question {num+1} / {questions.length}</h4>
    <h2 className='question' style={{color: ishilight?'#3C9BF2':'inherit'}} >{questions[num].text}</h2>

    <div className="options">
      {questions[num].options.map((option, index) => (
        <button key={index} className={`option${index}`} onClick={()=>{
          {option.isCorrect?setMarks(marks+1):setMarks(marks)}
          setNum(num+1)
        }}>
          {option.text}
        </button>
      ))}

    </div>
    <div className='highlights'>
      <button className='highlight' onClick={()=>{
        setHilight(true)
        }}>Highlight</button>
      <button className='RHighlight' onClick={()=>{
        setHilight(false)
      }}>Remove Highlight</button>
    </div>
  </div>:setScreen(3)}
  
  </>
}

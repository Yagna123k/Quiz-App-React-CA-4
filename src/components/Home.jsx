import React from 'react'

function Home({setScreen, setDark, Dark}) {
  return (
    <div>
      <button id='mode' className='home-mode' onClick={()=>{
        setDark(!Dark)
      }}>{Dark?'Light':'Dark'}</button>
      <div className='home-main'>
        <h1 className='title'>Code Craft: The React Quiz</h1>
      </div>
      <button className='start' onClick={()=>{
        setScreen(2)
      }}>Start Quiz</button>
    </div>
  )
}

export default Home

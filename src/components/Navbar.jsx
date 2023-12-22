import React from 'react'

export default function Navbar({setDark, Dark}) {
  return <div className='navbar'>
    <p className='logo'>Code Craft</p>
    <button id='mode' onClick={()=>{
      setDark(!Dark)
    }}>{Dark?'Light':'Dark'}</button>
  </div>
}

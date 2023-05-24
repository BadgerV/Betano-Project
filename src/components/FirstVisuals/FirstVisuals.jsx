import React from 'react'
import FirstMini from '../FirstMini/FirstMini';
import SecondMini from '../SecondMini/SecondMini';
import './firstVisuals.css';

const FirstVisuals = () => {
  return (
    <div className = "firstvisuals">
        <FirstMini />
        <div className="secondmini-container"><SecondMini /></div>
        <FirstMini />
    </div>
  )
}

export default FirstVisuals
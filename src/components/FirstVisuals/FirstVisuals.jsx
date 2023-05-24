import React from 'react'
import FirstMini from '../FirstMini/FirstMini';
import Roles from '../Roles/Roles';
import SecondMini from '../SecondMini/SecondMini';
import './firstVisuals.css';

const FirstVisuals = () => {
  return (
    <div className = "firstvisuals">
        <FirstMini />
        <div className="secondmini-container"><SecondMini /></div>
        <div className="secondmini-container"><Roles /></div>
        
    </div>
  )
}

export default FirstVisuals
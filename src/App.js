import './App.css';
import { useState } from 'react'

export function replaceCamelWithSpaces(str) {
  return str.replace(/\B([A-Z])\B/g, " $1")
}

function App() {
  const [btnColor, setBtnColor] = useState("red")
  const [btnDisabled, setBtnDisabled] = useState(false)
  const newBtnColor = btnColor === "red"? "blue" : "red"
  return (
    <div>
        <button disabled={btnDisabled} style={{backgroundColor: btnDisabled? "gray" : btnColor}} onClick={()=> {setBtnColor(newBtnColor)}} >Change to {newBtnColor}</button>
        <input type="checkbox" name="" id="disable-button-checkbox" defaultChecked={btnDisabled} onClick={()=> {setBtnDisabled(!btnDisabled)}} />
        <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;

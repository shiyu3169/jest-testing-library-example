import './App.css';
import { useState } from 'react'

function App() {
  const [btnColor, setBtnColor] = useState("red")
  const [btnDisabled, setBtnDisabled] = useState(false)
  const newBtnColor = btnColor === "red"? "blue" : "red"
  return (
    <div>
        <button disabled={btnDisabled} style={{backgroundColor: btnColor}} onClick={()=> {setBtnColor(newBtnColor)}} >Change to {newBtnColor}</button>
        <input type="checkbox" name="" id="" onClick={()=> {setBtnDisabled(!btnDisabled)}} />
    </div>
  );
}

export default App;

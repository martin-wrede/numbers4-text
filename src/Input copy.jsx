import React, { useState } from "react";
// import Task from "./components/Task";
import "./index.css";


export default function Input() {

const  [ age, setAge ] = useState(1)
const  [ name, setName ] = useState("Dear Iris")
const  [ title, setTitle ] = useState("Happy Birthday")
const  [ text, setText ] = useState( "Greetings from Anne")
const [showForms, setShowForms] = useState(true)

const toggleForms= (event)=> {

  setShowForms(!showForms)

}

const changeAge =(event)=>{
  const setAgeNew = event.target.value
  setAge(setAgeNew)
}
  
const changeTitle = (event)=>{
  const setTitleNew = event.target.value
  setTitle(setTitleNew)
 // console.log(setAge) 
}

const changeName = (event)=>{
  const setNameNew = event.target.value
  setName(setNameNew)
 // console.log(setAge)
}

const changeText = (event)=>{
  const setTextNew = event.target.value
  setText(setTextNew)
 // console.log(setAge)
}
  

  
return(     
<div className="meindiv">

    <div className="meindiv2">
      <h1> {age}</h1>
      {showForms &&   <input className="input" onChange={changeAge} />}
    </div>
     
    <div className="meindiv3">
      <h2>{title}</h2>  
      {showForms &&   <input className="input" onChange={changeTitle} /> }
    </div>

    <div className="meindiv4">
      <h3>{name}</h3>
    <div className="input">
    {showForms &&  <input className="input" onChange={changeName} /> }
    </div>
    </div>

    <div className="meindiv5">      
      <h4>{text}</h4>
     {showForms && <input className="input" onChange={changeText} /> }
    </div>

    <button className="button"
    onClick={toggleForms} >
      Show/Hide Forms
    </button>

</div>
)
}

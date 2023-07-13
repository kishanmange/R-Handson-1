import logo from './logo.svg';
import './App.css';
import Functioncompo from './components/functioncompo';
import Classcompo from './components/classcompo';
import { useState } from 'react';



function App() {

  const [fstate,setfstate] = useState(false);
  const [cstate,setcstate] = useState(false);
  return (
    <div className="App">
      <h1 style={ {textAlign : 'center'}}>styling using function and class components</h1>
      <div className='box'><button className='btn1' onClick={()=>setfstate(!fstate)} >function compo</button>
      <button className='btn2' onClick={()=>setcstate(!cstate)}>class compo</button></div>
     <div className='box1'>{fstate ? <Functioncompo/> : " "}
     {cstate ? <Classcompo/>: " "}</div>
      
     
      
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import Nav from './Components/Nav';
import Form from './Components/Form';
import './App.css';

function App() {

  const [mode, setMode] = useState('dark');

  return (
    <>
    <Nav mode = {mode} toggle = {setMode}/>
    <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
    <Form mode = {mode}/>
    </div>
    </>
  );
}

export default App;

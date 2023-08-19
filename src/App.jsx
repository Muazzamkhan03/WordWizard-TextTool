import React, {useState} from 'react';
import Nav from './Components/Nav';
import Form from './Components/Form';
import Alert from './Components/Alert';
import './App.css';

function App() {

  const [mode, setMode] = useState('dark');
  const [alertMode, setAlertMode] = useState(null);

  const showAlert = (mode, msg) => {
    setAlertMode({
      mode: mode,
      message: msg
    });

    setTimeout(() => {
      setAlertMode(null);
    }, 1000);
  }

  return (

    <>
    <Nav mode = {mode} toggle = {setMode} alert = {showAlert}/>
    <Alert mode= {alertMode}/>
    <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
    <Form mode = {mode} alert = {showAlert}/>
    </div>
    </>
  );
}

export default App;

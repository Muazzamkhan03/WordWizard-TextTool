import React, { useState } from 'react';
import Nav from './Components/Nav';
import Form from './Components/Form';
import About from './Components/About'
import Alert from './Components/Alert';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
      <Router>
        <Nav mode={mode} toggle={setMode} alert={showAlert} />
        <Alert mode={alertMode} />
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <Routes>
            <Route path='/' element={<Form mode={mode} alert={showAlert} />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Form mode={mode} alert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

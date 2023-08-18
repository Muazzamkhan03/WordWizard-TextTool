import React, {useState} from 'react';
import Nav from './Components/Nav';
import Form from './Components/Form';
import './App.css';

function App() {

  const [mode, setMode] = useState('light');

  return (
    <>
    <Nav />
    <div className="container">
    <Form />
    </div>
    </>
  );
}

export default App;

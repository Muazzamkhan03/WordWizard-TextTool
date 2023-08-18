import React, {useState} from 'react';
import Nav from './Components/Nav';
import './App.css';

function App() {

  const [text, setText] = useState('');

  return (
    <>
    <Nav />
    
    <div className="container my-4">
      <h1>Enter your text</h1>
      <form>
  <div className="mb-3">
    <textarea name="text" id="text" cols="140" rows="10" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
</div>
</form>
<button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers */ ()=>console.log('c')}>To Upper case</button>
<button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers */ ()=>console.log('c')}>To Lower case</button>
<button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers */ ()=>console.log('c')}>To Title case</button>
<button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers */ ()=>console.log('c')}>To Sentence case</button>
<button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers */ ()=>console.log('c')}>To camelCase</button>
<button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers */ ()=>console.log('c')}>To PascalCase</button>

<div className='my-2'>
<button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers */ ()=>console.log('c')}>To Binary</button>
<button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers */ ()=>console.log('c')}>To Morsecode</button>
</div>
    </div>
    <div className="container">
      <h3>Text Stats</h3>
      <h6>Words: {text.split(' ').length}</h6>
      <h6>Characters: {text.length}</h6>
    </div>
    </>
  );
}

export default App;

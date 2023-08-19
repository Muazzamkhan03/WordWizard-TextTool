import React, { useState } from 'react';


export default function Form({mode, alert}) {

    const [text, setText] = useState('');

    return (
        <div>
            <div className="container my-4" style={{color: mode==='light'?'#000000':'#FFFFFF'}}>
                <h1>Enter your text</h1>
                <form>
                    <div className="mb-3">
                        <textarea name="text" id="text" cols="100" rows="10" value={text} onChange={(e) => setText(e.target.value)} style={{color: mode==='light'?'#000000':'#000080', backgroundColor: mode==='light'?'#FFFFFF':'#87929e'}}></textarea>
                    </div>
                </form>
                <button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers and call the alert function accordingly */ () => console.log('c')}>To Upper case</button>
                <button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers and call the alert function accordingly */ () => console.log('c')}>To Lower case</button>
                <button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers and call the alert function accordingly */ () => console.log('c')}>To Title case</button>
                <button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers and call the alert function accordingly */ () => console.log('c')}>To Sentence case</button>
                <button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers and call the alert function accordingly */ () => console.log('c')}>To camelCase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers and call the alert function accordingly */ () => console.log('c')}>To PascalCase</button>

                <div className='my-2'>
                    <button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers and call the alert function accordingly */ () => console.log('c')}>To Binary</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers and call the alert function accordingly */ () => console.log('c')}>To Morsecode</button>
                </div>

                <div className='my-2'> 
                    <button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers and call the alert function accordingly */ () => console.log('c')}>Clear Text</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={/*TODO: Implement the handlers and call the alert function accordingly */ () => console.log('c')}>Copy Text</button>
                </div>
            </div>
            <div className="container" style={{color: mode==='light'?'#000000':'#FFFFFF'}}>
                <h3>Text Stats</h3>
                <h6>Words: {text.split(' ').length}</h6>
                <h6>Characters: {text.length}</h6>
            </div>
        </div>
    )
}

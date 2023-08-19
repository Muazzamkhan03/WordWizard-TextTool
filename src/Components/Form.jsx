import React, { useState } from 'react';


export default function Form({ mode, alert }) {

    const [text, setText] = useState('');

    const toUpper = () => {
        setText(text.toUpperCase());
        alert('success', 'Converted to upper case');
    }

    const toLower = () => {
        setText(text.toLowerCase());
        alert('success', 'Converted to lower case');
    }

    const toTitle = () => {
        setText(text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));
        alert('success', 'Converted to title case');
    }

    const toSentence = () => {
        setText(text.charAt(0).toUpperCase() + text.slice(1));
        alert('success', 'Converted to sentence case');
    }

    const toCamel = () => {
        setText(text.replace(/(?:^\w|[A-Z]|\b\w)/g, (char, index) =>
            index === 0 ? char.toLowerCase() : char.toUpperCase()
        ).replace(/\s+/g, ''));
        alert('success', 'Converted to camel case');
    }

    const toPascal = () => {
        setText(text.replace(/(?:^\w|\b\w)/g, char => char.toUpperCase()).replace(/\s+/g, ''));
        alert('success', 'Converted to pascal case');
    }

    const toBinary = () => {
        alert('success', 'Converted to binary');
    }
    
    const toMorse = () => {
        alert('success', 'Converted to morse code');
    }

    const removeSpace = () => {
        setText(text.replace(/\s+/g, ' ').trim());
        alert('success', 'Extra spaces removed');
    }

    const clear = () => {
        setText('');
        alert('success', 'Cleared textarea');
    }

    const copy = () => {
        navigator.clipboard.writeText(text);
        alert('success', 'Copied to clipboard');
    }

    return (
        <div>
            <div className="container my-4" style={{ color: mode === 'light' ? '#000000' : '#FFFFFF' }}>
                <h1>Enter your text</h1>
                <form>
                    <div className="mb-3">
                        <textarea name="text" id="text" cols="100" rows="10" value={text} onChange={(e) => setText(e.target.value)} style={{ color: mode === 'light' ? '#000000' : '#000080', backgroundColor: mode === 'light' ? '#FFFFFF' : '#87929e' }}></textarea>
                    </div>
                </form>
                <button type="button" className="btn btn-primary mx-1" onClick={toUpper}>To Upper case</button>
                <button type="button" className="btn btn-primary mx-1" onClick={toLower}>To Lower case</button>
                <button type="button" className="btn btn-primary mx-1" onClick={toTitle}>To Title case</button>
                <button type="button" className="btn btn-primary mx-1" onClick={toSentence}>To Sentence case</button>
                <button type="button" className="btn btn-primary mx-1" onClick={toCamel}>To camelCase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={toPascal}>To PascalCase</button>

                <div className='my-2'>
                    <button type="button" className="btn btn-primary mx-1" onClick={toBinary}>To Binary</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={toMorse}>To Morsecode</button>
                </div>

                <div className='my-2'>
                    <button type="button" className="btn btn-primary mx-1" onClick={removeSpace}>Remove whitespaces</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={clear}>Clear Text</button>
                    <button type="button" className="btn btn-primary mx-1" onClick={copy}>Copy Text</button>
                </div>
            </div>
            <div className="container" style={{ color: mode === 'light' ? '#000000' : '#FFFFFF' }}>
                <h3>Text Stats</h3>
                <h6>Words: {}</h6>
                <h6>Characters: {text.length}</h6>
            </div>
        </div>
    )
}

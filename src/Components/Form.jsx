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
        setText(text.split('').map(char => char.charCodeAt(0).toString(2)).join(' '));
        alert('success', 'Converted to binary');
    }

    const toMorse = () => {
        const morseCodes = {
            'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
            'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
            'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
            'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
            'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
            '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
            '6': '-....', '7': '--...', '8': '---..', '9': '----.',
            ' ': '/'
        };
        setText(text.toUpperCase().split('').map(char => morseCodes[char] || char).join(' '));
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
                    <div className="form-group">
                        <textarea className='form-control' name="text" id="text" rows="10" value={text} onChange={(e) => setText(e.target.value)} style={{ color: mode === 'light' ? '#000000' : '#0d1319', backgroundColor: mode === 'light' ? '#FFFFFF' : '#c3cad2' }}></textarea>
                    </div>
                </form>
                <div className='my-2'>
                    <button type="button" className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={toUpper}>To Upper case</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={toLower}>To Lower case</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={toTitle}>To Title case</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={toSentence}>To Sentence case</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={toCamel}>To camelCase</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={toPascal}>To PascalCase</button>
                </div>

                <div className='my-2'>
                    <button type="button" className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={toBinary}>To Binary</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={toMorse}>To Morsecode</button>
                </div>

                <div className='my-2'>
                    <button type="button" className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={removeSpace}>Remove whitespaces</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={clear}>Clear Text</button>
                    <button type="button" className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={copy}>Copy Text</button>
                </div>
            </div>
            <div className="container" style={{ color: mode === 'light' ? '#000000' : '#FFFFFF' }}>
                <h3>Text Stats</h3>
                <h6>Words: {text.split(' ').filter((word) => word !== '').length}</h6>
                <h6>Characters: {text.length}</h6>
            </div>
        </div>
    )
}

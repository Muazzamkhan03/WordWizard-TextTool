import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Nav({mode, toggle, alert}) {
  const toggleMode = ()=>{
    if(mode === 'dark'){
      document.body.style.backgroundColor = 'white';
      toggle('light');
      alert('success', 'Light mode on');
    }
    else{
      toggle('dark');
      document.body.style.backgroundColor = '#0d1319';
      alert('success', 'Dark mode on');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={mode}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">WordWizard TextTool</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode}/>
              <label class="form-check-label" for="flexSwitchCheckDefault" style={{color: mode==='light'?'#000000':'#FFFFFF'}}>Lightmode</label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

import React, {useState} from 'react';

export default function Nav({mode, toggle}) {
  const toggleMode = ()=>{
    if(mode === 'light'){
      toggle('dark');
      document.body.style.backgroundColor = '#0d1319';
    }
    else{
      toggle('light');
      document.body.style.backgroundColor = 'white';
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
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
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

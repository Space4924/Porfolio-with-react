import React from 'react';
import './main.css';
import './Dynamic.css';

const Card = () => {
  return (<>
    <div className='intro'>
      <div className="fix">
        <h3 className="hey">Hello, my name is</h3>
        <h1>Bhoopendra singh</h1>
      </div>
    </div>
    <div className="wrapper">
      <div className="static-text">I'm a  </div>

      <ul className="dynamic-text">
        <li><span>Architect</span></li>
        <li><span>Designer</span></li>
        <li><span>Youtuber</span></li>
        <li><span>Developer</span></li>

      </ul>

    </div>
  </>
  )
}

export default Card
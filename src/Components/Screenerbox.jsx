import React from 'react'
import { Link } from 'react-router-dom';
function ScreenerBox(props) {
  return (
    <div className='screeners-box'>
     
    
        <div style={{  marginLeft:"30px" ,fontFamily: 'Montserrat' }}>
            <h1 className='Text'>{props.Name}</h1>
            <h3>Performance {props.Performance}</h3>
            <h4 className='desc'>{props.description}</h4>
            <Link to="/screeners/recomendation">
      <button>View Plan</button>
    </Link>
        </div>
    </div>
  )
}

export default ScreenerBox
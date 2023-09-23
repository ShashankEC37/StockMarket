import React from 'react'
import NavBar from './NavBar';
import Contact from './Contact';
function Header() {
  return (
    
    <div id='main'>
      <NavBar/>
        <div className='name'>
            <h1>
            <h1>Pick the right Stocks </h1>
            <span>Strategically curated to your needs</span>
            </h1>
            <p className='details'>We connect you to the best Registered Investment Adivsers in The country</p>
            <h2><span>SEBI </span>Registered</h2>
            <h3>Connect with us Today</h3>
        <div className='phone-input'>
            <input type='phone' placeholder='+91' />
            <a href="#" className='phone-a'>Contact</a> 
        </div>
       
        </div>
    </div>
  )
}

export default Header
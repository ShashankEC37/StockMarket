import React from 'react'
import ScreenerBox from "./Screenerbox";
import profile from "../images/profile.jpeg"
import NavBar from './NavBar';
function Screeners() {
  return (
    <div    id='screeners'>
      <NavBar />

            <h1 style={{textAlign:"center"}}>Our Expert Registered Investment Advisers</h1>
    <div className='screener-container' >
    
        <ScreenerBox  Name="Rahul" Performance='76%' description="Expert Intra day Adviser " SEBI="SEBI Registration No. INA000017523" />
        <ScreenerBox  Name="Shaker" Performance='89%'description="Expert Futures & Options Adviser " SEBI="SEBI Registration No. INA000017523" />
        <ScreenerBox  Name="Jahnavi" Performance='63% 'description="Expert Equity Mutual Funds Adviser" SEBI="SEBI Registration No. INA000017523" />
        <ScreenerBox  Name="Rahul" Performance='76%' description="Expert Intra day Adviser " SEBI="SEBI Registration No. INA000017523" />
        <ScreenerBox  Name="Shaker" Performance='89%'description="Expert Futures & Options Adviser " SEBI="SEBI Registration No. INA000017523" />
        <ScreenerBox  Name="Jahnavi" Performance='63% 'description="Expert Equity Mutual Funds Adviser" SEBI="SEBI Registration No. INA000017523" />

 
    </div>
</div>
  )
}

export default Screeners
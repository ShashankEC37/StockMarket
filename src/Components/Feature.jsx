import React from 'react';
import FeatureBox from './FeatureBox';
import ShortTerm from '../images/Short term Stocks.PNG';
import MediumTerm from '../images/Medium Term.png';
import LongTerm from '../images/Long Term Stocks.jpg';



function Feature() {
  return (
    <div    id='features'>
      <h1>Invest and Grow your Wealth at your own Pace</h1>
        <div className='a-container'>
            <FeatureBox image={ShortTerm} title='Short Term Goals' description="Intra Day, High Volitility, High Yield Stocks, " />
            <FeatureBox image={MediumTerm} title='Medium Term Goals'description="Stocks invested for 2-3 month   " />
            <FeatureBox image={LongTerm} title='Long Term Goals 'description="Plan for Long Term Investment " />

        </div>
    </div>
  )
}

export default Feature
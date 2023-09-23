import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse sapiente 
                ullam quidem dolores sequi dolorem! Similique eveniet, molestias iste 
                saepe possimus magnam consequatur, explicabo in maiores pariatur 
                necessitatibus sed blanditiis et ducimus quam? Deserunt!</p>
                <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About
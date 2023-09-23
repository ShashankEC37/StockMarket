import React from 'react';
import "./Styles/Services.css";
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
const Services = () => {
  const courseData = [
    {
      title: 'Buy in Short Term',
      stocks: '5',
    },
    {
      title: 'Fill Holdings change',
      stocks: '6',
    },
    {
      title: 'Golden Crossover',
      stocks: '12',
    },
    {
      title: 'Upcoming Dividends',
      stocks: '3',
    },
    {
      title: 'Buy in Long Term',
      stocks: '20',
    },
    {
      title: 'Multibagger stocks FY24',
      stocks: '10',
    },
    {
      title: 'Top Gainers',
      stocks: '6',
    },
    {
      title: 'Cash Rich Small Cap',
      stocks: '11',
    },
  ];

  return (
    <>
    <NavBar />
    <div    id='services'>
    <div className="ag-format-container">
    <h1 style={{textAlign:"center"}}>Pick the Right Stocks for your Investment Strategy</h1>
      <div className="ag-courses_box">
        {courseData.map((course, index) => (
          <div className="ag-courses_item" key={index}>
                <Link to="/screeners/recomendation">
     

            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">{course.title}</div>
              {course.stocks && (
                <div className="ag-courses-item_stocks-box">
                   <span className="ag-courses-item_stocks">{course.stocks}</span> Stocks
                </div>
              )}
            </a>
            </Link>
          </div>
    
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Services;

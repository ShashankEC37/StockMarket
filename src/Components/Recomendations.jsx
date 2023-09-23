import React , { useState }from 'react'
import NavBar from './NavBar'
import "./Styles/Recomendation.css"
function Blogs() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <section class="standard-section">
    <div id='Recomendation'>
<NavBar />

<div style={{paddingTop:"10px"}}>
      <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
        <div className="logo-details">
        
          <span className="logo_name">Investments</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
             
              <span className="links_name">Buy In Short Term</span>
            </a>
          </li>
          <li>
            <a href="#">
         
              <span className="links_name">Multibagger Stocks</span>
            </a>
          </li>
          <li>
            <a href="#">
          
              <span className="links_name">High Dividend</span>
            </a>
          </li>
          <li>
            <a href="#">
        
              <span className="links_name">Low Debt Mid Cap</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="links_name">Medium Term Goals</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="links_name">Long Term Gals</span>
            </a>
          </li>
         
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i
              className={`bx ${isSidebarActive ? 'bx-menu-alt-right' : 'bx-menu'} sidebarBtn`}
              onClick={toggleSidebar}
            ></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search any Stock" />
            <i className='bx bx-search' ></i>
          </div>
          <div className="profile-details">
            <img src="images/profile.jpg" alt="" />
            <span className="admin_name">Rahul</span>
            <i className='bx bx-chevron-down' ></i>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Equity</div>
                <div className="number">₹ 40,876  <spam style={{color:"green"}}>↑</spam></div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className='bx bx-cart-alt cart'></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">F & O</div>
                <div className="number">₹ 38,876  <spam style={{color:"green"}}>↑</spam></div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className='bx bxs-cart-add cart two' ></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Debt</div>
                <div className="number">₹ 12,876  <spam style={{color:"red"}}>↓</spam></div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt down'></i>
                  <span className="text">Down from yesterday</span>
                </div>
              </div>
              <i className='bx bx-cart cart three' ></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Overall Portfolio</div>
                <div className="number">₹ 66,876 <spam style={{color:"green"}}>↑</spam></div>
                <div className="indicator">
                  <i className='bx bx-down-arrow-alt '></i>
                  <span className="text">Up From Yesterday</span>
                </div>
              </div>
              <i className='bx bxs-cart-download cart four' ></i>
            </div>
          </div>
          <h1 style={{textAlign:"center", fontSize:"25px"}}> </h1>
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Stocks to Buy Today</div>
              <div className="sales-details">
               
                <ul className="details">
                  <li className="topic">Stocks</li>
                  <li><a href="#">BPCL</a></li>
                  <li><a href="#">BSOFT</a></li>
                  <li><a href="#">GENUSPOWER</a></li>
                  <li><a href="#">ASIAN PAINTS</a></li>
                  <li><a href="#">WIRLPOOL</a></li>
                </ul>
                <ul className="details">
                  <li className="topic">ACTION</li>
                  <li><a href="#">BUY AT  ₹ 355</a></li>
                  <li><a href="#">BUY AT  ₹ 491</a></li>
                  <li><a href="#">BUY AT  ₹ 266</a></li>
                  <li><a href="#">BUY AT  ₹ 3244</a></li>
                  <li><a href="#">BUY AT  ₹ 1660</a></li>
            
                </ul>
                <ul className="details">
                  <li className="topic"> Stop Loss</li>
                  <li><a href="#">₹ 344</a></li>
                  <li><a href="#">₹ 478</a></li>
                  <li><a href="#">₹ 252</a></li>
                  <li><a href="#">₹ 3180</a></li>
                  <li><a href="#">₹ 1626</a></li>
                </ul>
          
              <ul className="details">
                  <li className="topic"> Target</li>
                  <li><a href="#"> ₹ 367</a></li>
                  <li><a href="#"> ₹ 515</a></li>
                  <li><a href="#"> ₹ 293</a></li>
                  <li><a href="#"> ₹ 3375</a></li>
                  <li><a href="#"> ₹ 1725</a></li>
                 
                </ul>
              </div>
              <div className="button">
                <a href="#">See All</a>
              </div>
            </div>
            <div className="top-sales box">
              <div className="title">Top Performing Stocks</div>
              <ul className="top-sales-details">
                <li>
                  <a href="#">
                    <img src="images/sunglasses.jpg" alt="" />
                    <span className="product">Indian Oil</span>
                  </a>
                  <span className="price" style={{color:"green", fontWeight:"bold"}}>₹ 455.56 ↑</span>
                </li>
                <li>
                  <a href="#">
                    <img src="images/jeans.jpg" alt="" />
                    <span className="product">TCS</span>
                  </a>
                  <span className="price" style={{color:"green", fontWeight:"bold"}}>₹ 130.45 ↑</span>
                </li>
                <li>
                  <a href="#">
                    <img src="images/nike.jpg" alt="" />
                    <span className="product">Infosys</span>
                  </a>
                  <span className="price" style={{color:"green", fontWeight:"bold"}}>₹ 52.23 ↑</span>
                </li>
                <li>
                  <a href="#">
                    <img src="images/scarves.jpg" alt="" />
                    <span className="product">HDFC</span>
                  </a>
                  <span className="price" style={{color:"red", fontWeight:"bold"}}>₹ 12.50 ↓ </span>
                </li>
                <li>
                  <a href="#">
                    <img src="images/blueBag.jpg" alt="" />
                    <span className="product">Zomato</span>
                  </a>
                  <span className="price" style={{color:"red", fontWeight:"bold"}}>₹ 15.42 ↓ </span>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>

</div>
</section>
  )
}

export default Blogs
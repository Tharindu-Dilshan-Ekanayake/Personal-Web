import React from 'react'
import NavBar from '../component/NavBar'
import PortfolioCompo from '../component/PortfolioCompo'
import BGPORT from '../images/BGPP.jpg'


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-right bg-cover no-repeat bg- lg-h-screen" style={{ backgroundImage: `url(${BGPORT})` }}>
        <div>
            <NavBar/>
        </div>
      <div>
        <PortfolioCompo/>
      </div>
    </div>
  )
}

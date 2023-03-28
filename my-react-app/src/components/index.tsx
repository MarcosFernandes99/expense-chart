import React from 'react'
import "./style.scss"
import logo from "../assets/logo.svg"

export const Home = () => {
  return (
    <section className='container'>

      <div className='balanceContainer'>
        <span className='myBalance'>My Balance</span>
        <span className='value'>R$900,00</span>
        <img src={logo} alt="logo" />
      </div>

      <div className='lastSevenDays'>

        <h3 className='title'>Spending - Last 7 days</h3>
        <div className='graphic'></div>

        <div className='totalMonth'>
          <div className='leftContainer'>
            <span className='thisMonth'>Total this month</span>
            <span className='value'>R$500,00</span>
          </div>

          <div className='rightContainer'>
            <span className='percentage'>+2.4%</span>
            <span className='montLast'>from last month</span>
          </div>
        </div>

      </div>

    </section>
  )
}

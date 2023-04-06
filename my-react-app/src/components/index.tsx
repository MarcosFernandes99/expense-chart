import React from 'react'
import "./style.scss"
import logo from "../assets/logo.svg"
import { ChartApex } from './Chart/ChartApex'
import { ChartJs } from './Chart/ChartJs'

export const Home = () => {

  const barColors = ['#EC765F', '#EC765F', '#EC765F', '#EC765F', '#EC765F', '#EC765F', '#EC765F']
  
  return (
    <section className='container'>

      <div className='balanceContainer'>
        <span className='myBalance'>My Balance</span>
        <span className='value'>$921.48</span>
        <img src={logo} alt="logo" />
      </div>

      <div className='lastSevenDays'>

        <span className='title'>Spending - Last 7 days</span>
        <div className='graphic'>
          <ChartApex/>
        </div>

        <div className='totalMonth'>
          <div className='leftContainer'>
            <span className='thisMonth'>Total this month</span>
            <span className='value'>$478.33</span>
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

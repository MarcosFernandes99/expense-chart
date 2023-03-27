import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from '../components'

export const BrowseRoutes = () => {
  return (
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
  )
}

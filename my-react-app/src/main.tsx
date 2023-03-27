import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowseRoutes} from './Routes/routes'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowseRoutes />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

<Analytics />


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode> 
    <SpeedInsights/>
    <Analytics />

    <App /> 
  </React.StrictMode>,
)

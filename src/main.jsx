import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DemoBook } from './PageDemo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <DemoBook /> */}
    <App />

  </React.StrictMode>,
)

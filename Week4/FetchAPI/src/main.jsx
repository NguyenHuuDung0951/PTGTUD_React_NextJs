import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Bai1 from './Bai1.jsx'
import Bai2 from './Bai2.jsx'
import Bai3 from './Bai3.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Bai3 />
  </StrictMode>,
)

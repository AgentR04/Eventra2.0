import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import custom styles
import './index.css'

// Import maroon theme (replaces blue with maroon)
import './styles/maroon-theme.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

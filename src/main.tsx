import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './components/App'
import AppWithSidebar from './components/navbar/AppWithSideBar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <AppWithSidebar />
  </StrictMode>,
)

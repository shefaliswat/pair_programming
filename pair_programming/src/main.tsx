import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

var c=30;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App c={c}/>
  </StrictMode>,
)

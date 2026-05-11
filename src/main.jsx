import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// main.jsx or index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Themeprovider from './Themeprovider.jsx';

createRoot(document.getElementById('root')).render(
  <Themeprovider>
    <App />
  </Themeprovider>,
)

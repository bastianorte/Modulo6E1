import { StrictMode } from 'react'
import ReactDOM from "react-dom";
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
  .then(() => console.log("Service Worker registrado"))
  .catch(error => console.log("Error en Service Worker",
  error));
  }

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
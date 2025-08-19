import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProverFavoritos } from "./contextos/favoritos_context";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProverFavoritos>
      <App />
    </ProverFavoritos>
  </StrictMode>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'

createRoot(document.getElementById('body')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


/*
const container = document.getElementById('app');
const root = createRoot(container);
*/
/**
 * Entry point of the React application.
 * Mounts the root App component to the DOM.
 */
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

/**
 * Mounts the application to the root DOM element.
 * Initializes React's StrictMode and renders the main App component.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

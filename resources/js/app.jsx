import './bootstrap';
import '../css/app.css';

// React imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Component imports
import Welcome from './components/welcome.jsx';

// Render the app
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Welcome />
    </StrictMode>
  );
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/vollkorn/400.css';
import '@fontsource/vollkorn/500.css';
import '@fontsource/vollkorn/600.css';
import '@fontsource/vollkorn/700.css';
import '@fontsource/vollkorn/400-italic.css';
import { App } from './App';

const rootEl = document.getElementById('root');
if (rootEl === null) {
  throw new Error('Root element #root not found');
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

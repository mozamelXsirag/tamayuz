import React from 'react';
import ReactDOM from 'react-dom/client';

const mount = () => {
  // Check if App is defined on window (set by App.tsx)
  const App = (window as any).App;
  
  // If not ready yet, retry in 50ms
  if (!App) {
    console.log('Waiting for App component...');
    setTimeout(mount, 50);
    return;
  }

  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Could not find root element to mount to");
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Start the mounting process
mount();
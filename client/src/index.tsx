import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './locale/i18n';

// import { ClerkProvider } from '@clerk/clerk-react';
import { App } from './App';

// const PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY ?? '';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
    <App />
    {/* </ClerkProvider> */}
  </React.StrictMode>
);

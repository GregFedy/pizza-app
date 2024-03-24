import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// biome-ignore lint/style/noNonNullAssertion: because it's safe to assume that the <div id="root"> element exists, and TS knows it. If we were to use a conditional render, then it would be a different story.
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

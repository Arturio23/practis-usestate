import React from 'react';
import App from './App';
import './index.css';
import {createRoot} from "react-dom/client";


const rootElement = document.getElementById('root');

// Використовуйте createRoot для рендерингу
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

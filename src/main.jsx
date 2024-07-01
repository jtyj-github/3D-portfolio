import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const originalWarn = console.warn;
    console.warn = message => {
        if (message.includes("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand")) {
            return;
        }
        originalWarn(message);
    };

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
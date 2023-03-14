import React from 'react';

import App from './App';

import './index.css';

import { createRoot } from 'react-dom/client';


// This links the folder to the index.html file
// This is linked to the root element in the index.html file, meaning the whole app goes in that div
// ReactDOM.render(<App />, document.getElementById('root'));

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import 'materialize-css/dist/css/materialize.css'
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();

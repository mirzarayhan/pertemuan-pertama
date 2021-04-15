import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "register-service-worker";
import BlogSpot from './Container/BlogSpot/BlogSpot'
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
   <BlogSpot />,
document.getElementById('root'));
serviceWorker.unregister();
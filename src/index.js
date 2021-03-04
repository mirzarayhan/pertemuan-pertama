import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "register-service-worker";


import BlogPost from './Container/BlogSpot/BlogSpot';


ReactDOM.render(
  <BlogPost />,
  document.getElementById('content'));
serviceWorker.unregister();
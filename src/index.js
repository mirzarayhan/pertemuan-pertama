import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from "register-service-worker";
import reportWebVitals from './reportWebVitals';
import Test from './Component/Test';
import HelloComponent from './Login/Login';
serviceWorker.unregister();

ReactDOM.render(
  <HelloComponent />,
  document.getElementById('root'));

reportWebVitals();  
// function HelloComponent() {
//   return HelloComponent;
// }
// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

// const HelloComponent = () => {
// return HelloComponent
// }

// class StateFullComponent extends React.Component{
//   render(){
//     return <p>StateFullComponent</p>
//  }
// }

// ReactDOM.render(<StateFullComponent />, document.getElementById('root'));
//reportWebVitals();


// ReactDOM.render(
//   <React.StrictMode>
//      <App />
//   </React.StrictMode>,
// document.getElementById('root')
// );
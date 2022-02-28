import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import './app/layout/styles.css';



const rootEl = document.getElementById('root');

function render(){
ReactDOM.render(
    <App />,rootEl
)};

if(module.hot){
  module.hot.accept('./app/layout/App.js',function(){
    setTimeout(render);
  })
}

render();
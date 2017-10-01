import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import HelloWord from './HelloWord'
import PropsValidation from './PropsValidation'
import Events from './Events'

ReactDOM.render(
   // <HelloWord txt = 'Hello word from componect React.js!'/>, 
  //  <PropsValidation name="Leonan" age="21" height="1.75" />,
    <Events />,  
    document.querySelector("#root")
);

/*
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

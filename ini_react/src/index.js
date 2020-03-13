import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*Funcao ultilizada uma unica vez na aplicação, renderiza o 
primeiro componente, no exemplo ele esta renderizando em root*/
ReactDOM.render(<App />, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

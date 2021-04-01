
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = (state) => {
// debugger;
    ReactDOM.render(

        <React.StrictMode>
            <App state={state} store={store}/>
        </React.StrictMode>,

        document.getElementById('root')
    );
};
rerenderEntireTree(store.getState());
// store.subscribe(rerenderEntireTree);
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});


import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'

import thunk from "redux-thunk";


import reducers from "./reducers";
import App from "./components/App";


const myStore = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.querySelector("#root"));
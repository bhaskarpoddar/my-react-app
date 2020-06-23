import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import App from "./App";
import store from "./stores";
import JnJThemeProvider from "./components/common/JnJThemeProvider";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <JnJThemeProvider>
        <Provider store={store}>
                <Router>
                    <App />
                </Router>
        </Provider>
    </JnJThemeProvider>,
    document.getElementById("root")
);

serviceWorker.unregister();

export {store}

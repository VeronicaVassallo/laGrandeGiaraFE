import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";

//config. initial of redux
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productReducerState from "../src/reducers/menuReducer";

const reducer = combineReducers({
	productsStore: productReducerState,
});

const store = configureStore({
	reducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

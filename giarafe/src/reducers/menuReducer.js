import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from "react-dotenv";

const initialState = {
	products: [],
	isLoading: false,
	error: null,
};

export const getProductsFromApi = createAsyncThunk(
	"products/getAllProducts",
	async () => {
		try {
			const responce = await fetch(`${env.REACT_APP_SERVER_BASE_URL}/product`);
			return await responce.json();
		} catch (error) {
			console.log(`Errore in menuReducer.js :${error}`);
		}
	}
);

const productsSlice = createSlice({
	name: "getProducts",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getProductsFromApi.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductsFromApi.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(getProductsFromApi.rejected, (state) => {
				state.isLoading = false;
				state.error = " Errore durante la ricezione dei dati dal server.";
			});
	},
});

export const allProducts = (state) => state.productsStore.products;

export const isProductLoading = (state) => state.productsStore.isLoading;

export const productError = (state) => state.productsStore.error;

export default productsSlice.reducer;

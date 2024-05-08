import { configureStore } from "@reduxjs/toolkit";
import { alumniApi } from "../services/alumniApi";
import { loginAPI } from "../services/loginApi";

export const store = configureStore({
    reducer: {
        [alumniApi.reducerPath]: alumniApi.reducer,
        [loginAPI.reducerPath]: loginAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            alumniApi.middleware,
            loginAPI.middleware
        ),
})
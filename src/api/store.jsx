import { configureStore } from "@reduxjs/toolkit";
import { alumniApi } from "../services/alumniApi";

export const store = configureStore({
    reducer: {
        [alumniApi.reducerPath]: alumniApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            alumniApi.middleware
        ),
})
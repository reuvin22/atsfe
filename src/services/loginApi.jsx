import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const loginAPI = createApi({
    reducerPath: 'loginAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/',
        prepareHeaders: (headers) => {
            const token = Cookies.get('token');
            if (token) {
              headers.set('authorization', `Bearer ${token}`);
              return headers;
            }else {
                console.log('No Token')
            }
          }
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => {
                return {
                    url: 'login',
                    method: 'POST',
                    body: credentials
                }
            }
        }),

        logout: builder.mutation({
            query: () => ({
              url: 'logout',
              method: 'POST'
            })
        })
    })
})

export const {
    useLoginMutation,
    useLogoutMutation
} = loginAPI
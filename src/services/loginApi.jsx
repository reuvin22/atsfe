import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { useState } from "react";

export const loginAPI = createApi({
    reducerPath: 'loginAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://reuvindevs.com/atsbe/public/api/',
        prepareHeaders: (headers) => {
            const token = Cookies.get('token');
            if (token) {
              headers.set('authorization', `Bearer ${token}`);
              return headers;
            }else {
                localStorage.setItem('error', 'Wrong email or password')
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
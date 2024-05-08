import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const alumniApi = createApi({
    reducerPath: 'alumniApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/',
        prepareHeaders: (headers) => {
            const token = Cookies.get('token');
            if(token){
                headers.set('authorization', `Bearer ${token}`)
            }
        }
    }),
    tagTypes: ['AlumniForm', 'AlumniData', 'UserData'],
    endpoints: (builder) => ({
        createData: builder.mutation({
            query:(args) => {
                const {data, url, actionType} = args;
                return {
                    url: `/${url}`,
                    method: 'POST',
                    body: {
                        data,
                        actionType
                    }
                }
            },
            invalidatesTags: ['AlumniForm']
        }),

        getAlumniData: builder.query({
            query: (args) => {
                const {items, page} = args;
                return {
                    url: `alumni-list`,
                    method: 'GET',
                    params: {
                        tab: 'tab2',
                        items,
                        page
                    }
                }
            },
            invalidatesTags: ['AlumniData']
        }),

        getUserData: builder.query({
            query: (args) => {
                const {items, page} = args;
                return {
                    url: `users`,
                    method: 'GET',
                    params: {
                        tab: 'tab3',
                        items,
                        page
                    }
                }
            },
            invalidatesTags: ['UserData']
        })
    })
})

export const {
    useCreateDataMutation,
    useGetAlumniDataQuery,
    useGetUserDataQuery
} = alumniApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const alumniApi = createApi({
    reducerPath: 'alumniFormApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'localhost:8000/api',
        prepareHeaders: (headers) => {
            const token = Cookies.get('token');
            if(token){
                headers.set('authorization', `Bearer ${token}`)
            }
        }
    }),
    tagTypes: ['AlumniForm'],
    endpoints: (builder) => ({
        createData: builder.mutation({
            query:(args) => {
                const session = Cookies.get('session');
                const {data, url, actionType} = args;
                return {
                    url: `/${url}`,
                    data: data,
                    actionType: actionType
                }
            },
            invalidatesTags: ['AlumniForm']
        }),
    })
})

export const {
    useCreateDataMutation
} = alumniApi;
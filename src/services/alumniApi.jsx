import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { data } from "autoprefixer";
import Cookies from "js-cookie";
export const alumniApi = createApi({
    reducerPath: 'alumniApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://atsdevs.org/atsbackend/public/api/',
        prepareHeaders: (headers) => {
            const token = Cookies.get('token');
            if(token){
                headers.set('authorization', `Bearer ${token}`)
            }
        }
    }),
    tagTypes: ['AlumniForm', 'AlumniData', 'UserData', 'UpdateUser'],
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

        deleteData: builder.mutation({
            query:(args) => {
                const {actionType, id, url} = args;
                return {
                    url: `/delete-alumni-list/${id}`,
                    method: 'DELETE',
                    body: {
                        actionType
                    }
                }
            },
           invalidatesTags: ['AlumniData', 'UserData']
        }),

        updateData: builder.mutation({
            query:(args) => {
                const {actionType, id, url, data} = args;
                return {
                    url: `/alumni-list/${id}`,
                    method: 'PUT',
                    body: {
                        actionType,
                        data
                    }
                }
            },
           invalidatesTags: ['UpdateUser']
        }),


        getAlumniData: builder.query({
            query: (args) => {
                const {items, page, tab} = args;
                return {
                    url: `alumni-list`,
                    method: 'GET',
                    params: {
                        tab,
                        items,
                        page
                    }
                }
            },
            providesTags: ['AlumniForm']
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
            providesTags: ['UserData', 'AlumniForm', 'UpdateUser']
        })
    })
})

export const {
    useCreateDataMutation,
    useGetAlumniDataQuery,
    useGetUserDataQuery,
    useDeleteDataMutation,
    useUpdateDataMutation
} = alumniApi;
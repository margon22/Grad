import { apiSlice } from "../../app/api/apiSlice"
import {  setCredentials } from "./authSlice"
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query:(credentials) => ({
                url: '/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        // sendLogout: builder.mutation({
        //     query: () => ({
        //         url: '/auth/logout',
        //         method: 'POST',
        //     }),
        //     async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        //         try {
        //             //const { data } = 
        //             await queryFulfilled
        //             //console.log(data)
        //             dispatch(logOut())
        //             dispatch(apiSlice.util.resetApiState())
        //         } catch (err) {
        //             console.log(err)
        //         }
        //     }
        // }),
        refresh: builder.mutation({
            query: () => ({
                url: '/login/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    const { accessToken } = data
                    dispatch(setCredentials({ accessToken }))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
    })
})

export const {
    useLoginMutation,
    useRefreshMutation,
} = authApiSlice 
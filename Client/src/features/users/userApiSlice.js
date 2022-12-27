import { createSelector,createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";
const userAdapter=createEntityAdapter({})
const initialState=userAdapter.getInitialState()

export const userApiSlice=apiSlice.injectEndpoints({
    endpoints:biulder=>({
        getUsers:biulder.query({
            query:()=>'/users',
            validateStatus:(response,result)=>{
                return response.status===200&&!result.isError
            },
            keepUnusedDataFor:60,
            transformResponse: responseData => {
                const loadedUsers = responseData.map(user => {
                    user.id = user._id
                    return user
                });
                return userAdapter.setAll(initialState, loadedUsers)
            },
             providesTags:(result,error,arg)=>{
                if(result?.ids){
                    return[
                        {
                            type:'User',id:'LIST'
                        },
                        ...result.ids.map(id=>({type:'User',id:'LIST'}))

                    ]                  
                }else return[{type:'User',id:'LIST'}]
             }
             
        }),
        addNewUser:biulder.mutation({
            query: initialUserData => ({
                url: '/users',
                method: 'POST',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: [
                { type: 'User', id: "LIST" }
            ]
        }),
        updateUser:biulder.mutation({
            query: initialUserData => ({
                url: `/users/${initialUserData.id}`,
                method: 'PATCH',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'User', id: arg.id }
            ]
        }),
        deleteUser:biulder.mutation({
            query: ({ id }) => ({
                url: `/users`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'User', id: arg.id }
            ]
        }),
        
    })
})
export const {
    useGetUsersQuery,
    useAddNewUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApiSlice

// returns the query result object
export const selectUsersResult = userApiSlice.endpoints.getUsers.select()

// creates memoized selector
const selectUsersData = createSelector(
    selectUsersResult,
    usersResult => usersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds
    // Pass in a selector that returns the users slice of state
} = userAdapter.getSelectors(state => selectUsersData(state) ?? initialState)
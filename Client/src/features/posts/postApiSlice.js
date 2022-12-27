import { createSelector,createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";
const postAdapter=createEntityAdapter({})
const initialState=postAdapter.getInitialState()

export const postApiSlice=apiSlice.injectEndpoints({
    endpoints:biulder=>({
        getPost:biulder.query({
            query:()=>'/posts',
            validateStatus:(response,result)=>{
                return response.status===200&&!result.isError
            },
            transformResponse: responseData => {
                const loadedPost = responseData.map(post => {
                    post.id = post._id
                    return post
                });
                return postAdapter.setAll(initialState, loadedPost)
            },
             providesTags:(result,error,arg)=>{
                if(result?.ids){
                    return[
                        {
                            type:'Post',id:'LIST'
                        },
                        ...result.ids.map(id=>({type:'Post',id:'LIST'}))

                    ]                  
                }else return[{type:'Post',id:'LIST'}]
             }
        }),
        addNewPost:biulder.mutation({
            query: initialPostData => ({
                url: '/posts',
                method: 'POST',
                body: {
                    ...initialPostData,
                }
            }),
            invalidatesTags: [
                { type: 'Post', id: "LIST" }
            ]
        })
    })
})
export const {
    useGetPostQuery,
    useAddNewPostMutation,
} = postApiSlice

// returns the query result object
export const selectPostResult = postApiSlice.endpoints.getPost.select()

// creates memoized selector
const selectPostData = createSelector(
    selectPostResult,
    PostResult => PostResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllPost,
    selectById: selectpostById,
    selectIds: selectpostIds
    // Pass in a selector that returns the Post slice of state
} = postAdapter.getSelectors(state => selectPostData(state) ?? initialState)
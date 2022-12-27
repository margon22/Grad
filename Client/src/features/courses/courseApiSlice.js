import { createSelector,createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";
const coursesAdapter=createEntityAdapter({})
const initialState=coursesAdapter.getInitialState()

export const coursesApiSlice=apiSlice.injectEndpoints({
    endpoints:biulder=>({
        getCourses:biulder.query({
            query:()=>'/courses',
            validateStatus:(response,result)=>{
                return response.status===200&&!result.isError
            },
            transformResponse: responseData => {
                const loadedCourses = responseData.map(courses => {
                    courses.id = courses._id
                    return courses
                });
                return coursesAdapter.setAll(initialState, loadedCourses)
            },
             providesTags:(result,error,arg)=>{
                if(result?.ids){
                    return[
                        {
                            type:'Course',id:'LIST'
                        },
                        ...result.ids.map(id=>({type:'Courses',id:'LIST'}))

                    ]                  
                }else return[{type:'Courses',id:'LIST'}]
             }
        }),
        addNewCourses:biulder.mutation({
            query: initialcoursesData => ({
                url: '/courses',
                method: 'POST',
                body: {
                    ...initialcoursesData,
                }
            }),
            invalidatesTags: [
                { type: 'courses', id: "LIST" }
            ]
        })
    })
})
export const {
    useGetCoursesQuery,
    useAddNewCoursesMutation,
} = coursesApiSlice

// returns the query result object
export const selectcoursesResult = coursesApiSlice.endpoints.getCourses.select()

// creates memoized selector
const selectcoursesData = createSelector(
    selectcoursesResult,
    coursesResult => coursesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllCourses,
    selectById: selectCoursesById,
    selectIds: selectCoursesIds
    // Pass in a selector that returns the courses slice of state
} = coursesAdapter.getSelectors(state => selectcoursesData(state) ?? initialState)
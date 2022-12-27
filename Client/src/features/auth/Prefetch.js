import { store } from '../../app/store'
import { postApiSlice } from '../posts/postApiSlice'
import { userApiSlice } from '../users/userApiSlice';
import { coursesApiSlice } from '../courses/courseApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        const posts = store.dispatch(postApiSlice.endpoints.getPost.initiate())
        const users = store.dispatch(userApiSlice.endpoints.getUsers.initiate())
        const courses = store.dispatch(coursesApiSlice.endpoints.getCourses.initiate())

        return () => {
            console.log('unsubscribing')
            posts.unsubscribe()
            users.unsubscribe()
            courses.unsubscribe()
        }
    }, [])

    return <Outlet />
}
export default Prefetch
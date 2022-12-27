import { useSelector } from 'react-redux'
import { selectAllCourses } from './courseApiSlice'
import AddNewCourse from './AddNewCourse'

const NewCourse = () => {
    const courses = useSelector(selectAllCourses)
    // console.log(users)
    const content = courses ? <AddNewCourse courses={courses} /> : <p>Loading...</p>

    return content
}
export default NewCourse
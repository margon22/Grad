import Course from "./Course"
// import '../../../src/main.scss'
import './courses.scss'
import { useGetCoursesQuery } from "./courseApiSlice"
import { Link } from "react-router-dom"
const CoursesList = () => {
    const {
        data:Coursess,  
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCoursesQuery()


    let content

    if (isLoading) content = <p>Loading...</p>

    // if (isError) {
    //     content = <p className="errmsg">{error?.data?.message}</p>
    // }
    if (isError) {
        content = <p>{error?.data?.message}</p>
    }
  
    if (isSuccess) {
        console.log("asdas")
        const { ids } = Coursess

        const tableContent = ids?.length
            ? ids.map(coursesId => <Course key={coursesId} coursesId={coursesId} />)
            : null

        content = (
            <>
                 <nav>
                 <h1 className="logo">student affiras system</h1>
                 <ul>
                   <li>
                     <a href="#home">home</a>
                   </li>
         
                   
                   <li>
                     <a href="#contact-it">contact it</a>
                   </li>
                   <li>
                     <a href="#">courses</a>
                   </li>
                   <li>
                     <a href="#">user</a>
                   </li>
                  
                 </ul>
                     <Link to='add' className="btn">New Course</Link>
                     <figure>
                         <img src="https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                     </figure>
                 
               </nav>
                      
                      
            
            
            
                    <ul className="table__row courses">
                        
                    <li className='li-parent'>
                <li>name</li>
                <li >code</li>
                <li >credit</li>
                <li >level</li>
                <li >sem</li>
                <li >preqname</li>

            </li>
                            {tableContent}
                        
                    </ul>
                     </>
        )
    }

    return content
  
}

export default CoursesList

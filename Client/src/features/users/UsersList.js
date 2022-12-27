import User from "./User"
import { useGetUsersQuery } from "./userApiSlice"
import EditUser from "./EditUser"
import { Link } from "react-router-dom"
import './user.scss'
const UsersList = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery((undefined,
        {pollingIntervals:15000,
        refetchOnFocus:true,
        refetchOnMountOrArgChange:true
    }))


    let content

    if (isLoading) content = <p>Loading...</p>

    // if (isError) {
    //     content = <p className="errmsg">{error?.data?.message}</p>
    // }
    if (isError) {
        content = <p >{error?.data?.message}</p>
    }
  
    if (isSuccess) {

        const { ids } = users

        const tableContent = ids?.length
            ? ids.map(userId => <User key={userId} userId={userId} />)
            : null

        content = (
            <>
            {/* <table >
                <thead>
                    <tr>
                        <th >name</th>
                        <th >user name</th>
                        <th >email</th>
                        <th >phone</th>
                        <th >role</th> */}
                        {/* <th ><Link to="/edituser">Edit {<EditUser/>}</Link> </th> */}
                    {/* </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table> */}
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
          <li>
            <a href="#">footer</a>
          </li>
          {/* <li>
          </li> */}
        </ul>
            <figure>
                <img src="https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </figure>
        
      </nav>
            <div className="search-adduser">
              <div className="search-container">
                <input type="text" name="search" id="" placeholder="search..." />
                <a href="#" className="btn btn-search">
                  search
                </a>
              </div>
              <div className="adduser btn-adduser">
                <Link to='/dash/users/add' className="btn">add user</Link>
              </div>
            </div>
            {tableContent}

            </>
        )
    }

    return content
  
}

export default UsersList

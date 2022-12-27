// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserById } from './userApiSlice'
import './user.scss'
const User = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId))

    // const navigate = useNavigate()
    const navigate = useNavigate()

    if (user) {
        const handleEdit = () => navigate(`/dash/users/${userId}`)

        // const userRolesString = user.roles.toString().replaceAll(',', ', ')


        return (
            <>
            {/* <tr > */}
                {/* <td >{user.name}</td>
                <td >{user.username}</td>
                <td >{user.Email}</td>
                <td >{user.phone}</td>
                <td >{user.role}</td> */}
                {/* <td >{userRolesString}</td> */}
                {/* <td>
                </td> */}
            {/* </tr> */}
            <div className="list-user">
            {/* <div className="search-adduser">
              <div className="search-container">
              <input type="text" name="search" id="" placeholder="search..." />
              <a href="#" className="btn">
                  search
                </a>
                </div>
                <div className="adduser">
                <a href="#" className="btn">
                  add user
                </a>
                </div>
            </div> */}
            <ul>
              <li>
                <span>{user.name}</span>
                <span>{user.username}</span>
                <span>{user.Email}</span>
                <span>{user.phone}</span>
                <span>{user.role}</span>
                <span>
                    <button className='btn' onClick={handleEdit}>edit</button>
                </span>
                <span>
                    <button className='btn' onClick={handleEdit}>delete</button>
                </span>
              </li>
            </ul>
          </div>
          </>
        )

    } else return null
}
export default User
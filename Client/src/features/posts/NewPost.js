import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/userApiSlice'
import AddNewPost from './AddNewPost'

const NewPost = () => {
    const users = useSelector(selectAllUsers)
    // console.log(users)
    const content = users ? <AddNewPost users={users} /> : <p>Loading...</p>

    return content
}
export default NewPost
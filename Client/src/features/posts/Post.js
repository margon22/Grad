// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectpostById } from './postApiSlice'
import '../../../src/main.scss';

const Post = ({ postId }) => {
    const post = useSelector(state => selectpostById(state, postId))

    // const navigate = useNavigate()

    if (post) {

        // const postRolesString = post.roles.toString().replaceAll(',', ', ')


        return (
            
            <tr className="table__row post">
                <td >{post.name}</td>
                <td >{post.title}</td>
                <td >{post.content}</td>
                <td >{post.date}</td>
                {/* <td >{postRolesString}</td> */}
             
            </tr>
            
        )

    } else return null
}
export default Post
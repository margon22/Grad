import Post from "./Post"
import '../../../src/main.scss'
import { useGetPostQuery } from "./postApiSlice"
const PostList = () => {
    const {
        data:posts,  
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostQuery()


    let content

    if (isLoading) content = <p>Loading...</p>

    // if (isError) {
    //     content = <p className="errmsg">{error?.data?.message}</p>
    // }
    if (isError) {
        content = <p>{error?.data?.message}</p>
    }
  
    if (isSuccess) {

        const { ids } = posts

        const tableContent = ids?.length
            ? ids.map(postId => <Post key={postId} postId={postId} />)
            : null

        content = (
            <table >
                <thead >
                    <tr>
                        <th scope="col" >Owner</th>
                        <th scope="col" >title</th>
                        <th scope="col" >content</th>
                        <th scope="col" >Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
  
}

export default PostList

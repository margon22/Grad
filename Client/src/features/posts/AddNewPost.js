import { useState, useEffect } from "react"
import { useAddNewPostMutation } from "./postApiSlice"
import { useNavigate } from "react-router-dom"
import './post.scss';

// const Post_REGEX = /^[A-z]{3,20}$/
// const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const AddNewPost = ({users}) => {

    const [addNewPost, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewPostMutation(undefined,
        {pollingIntervals:15000,
        refetchOnFocus:true,
        refetchOnMountOrArgChange:true
    })

    const navigate = useNavigate()

    const [postId, setPostId] = useState('')
    const [title, setTitle] = useState('')
    // const [validPostname, setValidPostname] = useState(false)
    const [poster, setPoster] = useState(users[0])
    // const [validPassword, setValidPassword] = useState(false)
    const [content, setContent] = useState('')

    // useEffect(() => {
    //     setValidPostname(Post_REGEX.test(Postname))
    // }, [Postname])

    // useEffect(() => {
    //     setValidPassword(PWD_REGEX.test(password))
    // }, [password])

    useEffect(() => {
        if (isSuccess) {
            setPostId('')
            setTitle('')
            setPoster('')
            setContent('')
        console.log(poster)

            navigate('/dash')
        }
    }, [isSuccess, navigate])

    const onPostIdChanged = e => setPostId(e.target.value)
    const onTitleChanged = e => setTitle(e.target.value)
    const onPosterChanged = e => setPoster(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    // const onDateChanged = e => setDate(e.target.value)
    // const canSave = [Roles.length, validPostname, validPassword].every(Boolean) && !isLoading

    const onSavePostClicked = async (e) => {
        e.preventDefault()
        if (true) {
            await addNewPost({poster:poster,title,content})
        }
    }
    const options = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}
            > {user.name}</option>
        )
    })
    const message = (
        <>
            {/* <p classname={errClass}>{error?.data?.Content}</p> */}

            <div>
      <div className="parent-container-form">
        <div className="form-container">
        
          <div className="form-side">
            <form action="" onSubmit={onSavePostClicked}>
              <h3>make announcement</h3>
              <input type="text" name="title" id="" placeholder="title"   value={title}
                    onChange={onTitleChanged}/>
              <input
                type="text"
                name="post-content"
                id=""
                placeholder="content"
                value={content}
                onChange={onContentChange}
              />
              <label className="form__label form__checkbox-container" htmlFor="username">
                    ASSIGNED TO:</label>
                <select
                    id="username"
                    name="username"
                    className="form__select"
                    value={poster}
                    onChange={onPosterChanged}
                >
                    {options}
                </select>

              <input type="submit" value=" make announcement" className="btn btn-announce" />
            </form>
          </div>
        </div>
      </div>
    </div>
        </>
    )

    return message
}
export default AddNewPost
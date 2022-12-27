import { useState, useEffect } from "react"
import { useAddNewCoursesMutation } from "./courseApiSlice"
import { useNavigate } from "react-router-dom"
import './courses.scss'

// const USER_REGEX = /^[A-z]{3,20}$/
// const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const AddNewCourse = ({courses}) => {

    const [addNewCourse, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewCoursesMutation()

    const navigate = useNavigate()

    const [name, setName] = useState('')
    // const [validUsername, setValidUsername] = useState(false)
    const [code, setCode] = useState('')
    // const [validPassword, setValidPassword] = useState(false)
    const [credit, setCredit] = useState('')
    const [level, setLevel] = useState('')
    const [sem, setSem] = useState('')
    const [preq, setPreq] = useState(courses[0])
   

    // useEffect(() => {
    //     setValidUsername(USER_REGEX.test(username))
    // }, [username])

    // useEffect(() => {
    //     setValidPassword(PWD_REGEX.test(password))
    // }, [password])

    useEffect(() => {

        // console.log(isLoading)
        // console.log(level,preq,sem,name,code,credit)
        if (isSuccess) {
            setName('')
            setCode('')
            setCredit('')
            setLevel('')
            setSem('')
            setPreq('')
            navigate('/dash/courses')
        }
    }, [isSuccess, navigate])

    const onNameChange = e => setName(e.target.value)
    const onCodeChange = e => setCode(e.target.value)
    const onCreditChange = e => setCredit(e.target.value)
    const onLevelChange = e => setLevel(e.target.value)
    const onSemChange = e => setSem(e.target.value)
    const onPreqChange = e => setPreq(e.target.value)
   
    // const canSave = [Roles.length, validUsername, validPassword].every(Boolean) && !isLoading
    const options = courses.map(course => {
        return (
            <option
                key={course.id}
                value={course.id}
            > {course.name}</option>
        )
    })


    const onSaveUserClicked = async (e) => {
        e.preventDefault()
        if (true) {
            await addNewCourse({ name,code,credit
                ,level,sem,preq:preq
            })  
        }
    }
    // const errClass = isError ? "errmsg" : "offscreen"
    // const validUserClass = !validUsername ? 'form__input--incomplete' : ''
    // const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
    // const validRolesClass = !Boolean(Roles.length) ? 'form__input--incomplete' : ''


    const content = (
        <>
            {/* <p classname={errClass}>{error?.data?.message}</p> */}

            <form 
             onSubmit={onSaveUserClicked}
             className='add-new-course'
            >
                <div >
                    <h2>New course</h2>
                   
                </div>

                
                <input
                    // classname={`form__input ${validPwdClass}`}
                    // id="password"
                    name="name"
                    type="name"
                    value={name}
                    onChange={onNameChange}
                    placeholder='name'
                />
               
                <input
                    // classname={`form__input ${validPwdClass}`}
                    // id="password"
                    // name="password"
                    type="text"
                    value={code}
                    onChange={onCodeChange}
                    placeholder="code"
                />
                
                <input
                    // classname={`form__input ${validPwdClass}`}
                    // id="password"
                    // name="password"
                    type="text"
                    value={credit}
                    onChange={onCreditChange}
                    placeholder='credit'
                />
                
                <input
                    // classname={`form__input ${validPwdClass}`}
                    // id="password"
                    // name="password"
                    type="text"
                    value={level}
                    onChange={onLevelChange}
                    placeholder='level'
                />
                
                <input
                    // classname={`form__input ${validPwdClass}`}
                    // id="password"
                    // name="password"
                    type="text"
                    value={sem}
                    onChange={onSemChange}
                    placeholder='sem'
                />
                
                <select 
                    id="username"
                    name="username"
                    className="form__select"
                    value={preq}
                    onChange={onPreqChange}
                    placeholder='preq'
                >
                    {options}
                </select>
                <div className="btn-container">
                        <button className="btn" title="Save">
                            add
                        </button>
                    </div>
                

            </form>
        </>
    )

    return content
}
export default AddNewCourse
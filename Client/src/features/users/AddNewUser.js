import { useState, useEffect } from "react"
import { useAddNewUserMutation } from "./userApiSlice"
import { useNavigate } from "react-router-dom"
import { Roles } from "../../config/Roles"
import '../../../src/main.scss'

// const USER_REGEX = /^[A-z]{3,20}$/
// const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const AddNewUser = () => {

    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    // const [validUsername, setValidUsername] = useState(false)
    const [password, setPassword] = useState('')
    // const [validPassword, setValidPassword] = useState(false)
    const [role, setrole] = useState(["student"])
    const [name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    // useEffect(() => {
    //     setValidUsername(USER_REGEX.test(username))
    // }, [username])

    // useEffect(() => {
    //     setValidPassword(PWD_REGEX.test(password))
    // }, [password])

    useEffect(() => {
        console.log(isSuccess)
        if (isSuccess) {
            setUsername('')
            setPassword('')
            setName('')
            setEmail('')
            setPhone('')
            setrole([])
            navigate('/dash/users')
        }
    }, [isSuccess, navigate])

    const onUsernameChanged = e => setUsername(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)
    const onNameChange = e => setName(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)
    const onPhoneChanged = e => setPhone(e.target.value)

    const onRolesChanged = e => {
        const values = Array.from(
            e.target.selectedOptions, //HTMLCollection 
            (option) => option.value
        )
        setrole(values)
    }

    // const canSave = [Roles.length, validUsername, validPassword].every(Boolean) && !isLoading

    const onSaveUserClicked = async (e) => {
        e.preventDefault()
        if (true) {
            await addNewUser({ username, password,name,Email,phone ,role })
        }
    }

    const options = Object.values(Roles).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })

    // const errClass = isError ? "errmsg" : "offscreen"
    // const validUserClass = !validUsername ? 'form__input--incomplete' : ''
    // const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
    // const validRolesClass = !Boolean(Roles.length) ? 'form__input--incomplete' : ''


    const content = (
        <>

            <form 
            className="add-new-user"
             onSubmit={onSaveUserClicked}
            >
                <div >
                    <h2>New User</h2>
                  
                </div>
                
                <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="off"
                    value={username}
                    onChange={onUsernameChanged}
                    placeholder='username'
                />

                
                <input
                    
                    type="password"
                    value={password}
                    onChange={onPasswordChanged}
                    placeholder='password'
                />
                
                <input
                    
                    name="name"
                    type="name"
                    value={name}
                    onChange={onNameChange}
                    placeholder='name'
                />
              
                <input
                   
                    type="Email"
                    value={Email}
                    onChange={onEmailChanged}
                    placeholder="email"
                />
               
                <input
                    
                    type="tel"
                    value={phone}
                    onChange={onPhoneChanged}
                    placeholder='phone'
                />

               
                <select
                    id="Roles"
                    name="Roles"
                    // multiple={true}
                    // size="3"
                    value={role}
                    onChange={onRolesChanged}
                >
                    {options}
                </select>
                <div className="btn-container">
                        <button
                        className="btn"
                            
                            title="Save"
                        >
                            add
                        </button>
                    </div>
            </form>
        </>
    )

    return content
}
export default AddNewUser
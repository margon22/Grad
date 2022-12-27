import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import '../../components/public.scss'
import usePersist from '../../hooks/usePersist'

 const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()
    

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log()
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/dash')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else if (err.status === 404) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <p>Loading...</p>

    const content = ( 
        // <section className="public">
        //     <header>
        //         <h1>Login</h1>
        //     </header>
        //     <main className="login">
        //         <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>

        //         <form className="form" onSubmit={handleSubmit}>
        //             <label htmlFor="username">Username:</label>
        //             <input
        //                 className="form__input"
        //                 type="text"
        //                 id="username"
        //                 ref={userRef}
        //                 value={username}
        //                 onChange={handleUserInput}
        //                 autoComplete="off"
        //                 required
        //             />

        //             <label htmlFor="password">Password:</label>
        //             <input
        //                 className="form__input"
        //                 type="password"
        //                 id="password"
        //                 onChange={handlePwdInput}
        //                 value={password}
        //                 required
        //             />
        //             <button className="form__submit-button">Sign In</button>
        //         </form>
                <div className="parent-container-form">

<div className="form-container">
  {/* <div className="welcome-info">
    <h2>welcome back!</h2>
    <p>to keep connect with us please login with your personal info</p>
    <Link to="/Home"> test for go dfgdf to user</Link>
  </div> */}
  <div className="form-side">
    <form action="" onSubmit={handleSubmit}>
    <h3>login to your account</h3>
      <input
        type="text"
        name="userName"
        id="userName"
        placeholder="enter your user name"
        ref={userRef}
                        value={username}
                        onChange={handleUserInput}
                        autoComplete="off"
                        required
      />
      <input
        type="password"
        name="pass"
        id="pass"
        placeholder="enter your pass"
        onChange={handlePwdInput}
        value={password}
        required
      />
        <label htmlFor="persist" className="form__persist">
                        <input
                            type="checkbox"
                            className="form__checkbox"
                            id="persist"
                            onChange={handleToggle}
                            checked={persist}
                            
                        />
                        {/* Trust This Device */}
                    </label>
      <input type="submit" value="Login" className="btn"/>
    </form>
  </div>
</div>
</div>
        //     </main>
        //     <footer>
        //         <Link to="/">Back to Home</Link>
        //     </footer>
        // </section>
    )

    return content
}
export default Login
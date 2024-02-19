import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { UserContext } from "../../contexts/UserContext"

export default function Login() {

    const [user, setUser] = useState({username: '', password: ''})
    const [ isLogging, setIsLogging ] = useState(false)
    const { updateUser, user: userState, updateLocalStorage } = useContext(UserContext)
    const navigate = useNavigate()
    


    if (isLogging) {
        console.log(user, 'user info');
        LoginUser()
    }

    useEffect(() => {
        if (userState.username) {
            navigate('/')
            return
        }
        const localUser = JSON.parse(localStorage.getItem('user'))
        console.log(localUser, 'local user');
        if (localUser.username && !userState.username ) {
            console.log('in if =========');
            updateUser(localUser)
            navigate('/')
            return
        }
    }, [])

    async function getUser(username){
        const res = await fetch('https://padawanz-flask-app.onrender.com/'.concat(username))
        if (res.ok) {
            const data = await res.json()
            console.log(data);
            return data
        }
}

    async function LoginUser() {
        console.log(user, 'from logggggg')

        const res = await fetch('https://padawanz-flask-app.onrender.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data)
            if (data.token) {
                toast.success(user.username.concat(' logged in!'))
                const userData = await getUser(user.username)
                updateUser({ token: data.token, username: user.username, followed: userData.followed })
                updateLocalStorage()
                navigate('/')
                return
            }
        }
        toast.error('Invalid User Info: Try Again')
        console.error('Login Failed')
        setIsLogging(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const loginElement = e.currentTarget
        const loginForm = new FormData(loginElement)
        console.log(loginForm.get('username'))
        setUser(
            Object.fromEntries(loginForm)
        )
        setIsLogging(true)
    }

    return (
        <>
            <h3>Login</h3>
            <form action="" id="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username"></label> <br />
                <input type="text" name="username" /> <br />
                <label htmlFor="password"></label> <br />
                <input type="password" name="password" /> <br />
                <input type="submit" value={'Login'} />
            </form>
        </>
    )
}

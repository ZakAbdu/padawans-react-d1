import { useState } from "react"


export default function Login({updateUser}) {

    const [user, setUser] = useState({username: '', password: ''})
    const [ isLogging, setIsLogging ] = useState(false)

    if (isLogging) {
        LoginUser()
    }

    async function LoginUser() {
        console.log(user, 'from logggggg')

        const res = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data)
            updateUser({ token: data.token, username: user.username, password: user.password })
        }
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

import { useEffect, useState, useContext} from "react"
import { UserContext } from "../contexts/UserContext"
import Spinner from 'react-bootstrap/Spinner'

export default function Users() {

    const { user: loggedUser } = useContext(UserContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
       (async () => {
            const res = await fetch('https://padawanz-flask-app.onrender.com/user')
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                setUsers(data)
            }
        }) ()
    }, [])

    if (users.length === 0) {
        return <Spinner />
    }

    async function followUser(followerId) {
        const res = await fetch(`https://padawanz-flask-app.onrender.com/user/follow/${followerId}/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${loggedUser.token}`
            }
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data)
        }
    }

    return (
        <>
            {users.map(user => {
                if (user.username !== loggedUser.username) {
                    return <div key={user.id}>
                        <p>{user.username}</p>
                        <button onClick={() => { followUser(user.id) }}>Follow</button>
                    </div>
                }
            })}
        </>
    )
}

import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'

export default function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
       (async () => {
            const res = await fetch('http://127.0.0.1:5000/user')
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

    return (
        <>
            {users.map(user => {
                return <p key={user.id}>{user.username}</p>
            })}

        </>
    )
}

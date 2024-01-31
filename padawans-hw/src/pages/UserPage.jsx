import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'

// import Body from "../components/Body"

export default function UserPage() {

    const [user, setUser] = useState(null)
    const { username } = useParams()
    console.log(username, 'params');

    useEffect(() => {
        (async () => {
            const res = await fetch('https://padawanz-flask-app.onrender.com/user'.concat(username))
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                const { username, movies } = data
                setUser({ username, movies  })
            }
        })()
    }, [])

    if (!user) return <Spinner />

    return(
        <>
            <h2>{ user.username }</h2>
            { user.movies.map( (movie) => {
                return <p key={movie.id}>{movie.title}</p>
            })}
        </>
    )
}

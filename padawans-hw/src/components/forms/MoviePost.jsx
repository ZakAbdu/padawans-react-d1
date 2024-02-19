import { useRef, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function MoviePost() {

    const titleInputRef = useRef(null)
    const yearInputRef = useRef(null)
    const directorInputRef = useRef(null)
    const { user } = useContext(UserContext)

    async function sendMovie( movieData ) {
        const res = await fetch('https://padawanz-flask-app.onrender.com/movie/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({
                title: movieData.title,
                year: movieData.year,
                director: movieData.director
            })
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data)
            return
        } else {
            const errorData = await res.json();
            console.error('Post failed:', errorData);
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        const movieData = {
            title: titleInputRef.current.value,
            year: yearInputRef.current.value,
            director: directorInputRef.current.value
        }
        sendMovie(movieData)
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="form">Movie</label>
            <input type="text" name='title' placeholder="title" ref={titleInputRef} />
            <input type="text" name="year" placeholder="year" ref={yearInputRef} />
            <input type="text" name="director" placeholder="director" ref={directorInputRef} />
            <input type="submit" value='post movie' />
        </form>
    )
}

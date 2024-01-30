import { useRef } from "react";

export default function MoviePost({user}) {

    const movieInputRef = useRef(null)

    async function sendMovie() {
        const res = await fetch('http://127.0.0.1:5000/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({body: movieData})
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data)
            return
        }
        console.error('Post failed')
    }

    function handleSubmit(e) {
        e.preventDefault()
        const movieData = movieInputRef.current.value
        sendMovie(movieData)
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="form">Movie</label>
            <input type="text" name='movie' ref={movieInputRef} />
            <input type="submit" value='movie' />
        </form>
    )
}

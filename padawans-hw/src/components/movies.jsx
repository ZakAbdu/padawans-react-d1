import { useState } from "react"
import Movie from "./movie"

export const Movies = () => {

    const [movies, setMovies] = useState([])

    useState (() => {
        (async () => {
            const res = await fetch('https://padawanz-flask-app.onrender.com/movie/')
            if (res.ok) {
                const data = await res.json()
                setMovies(data);
                return
            }
            console.error('failed to get movie')
        }) ()
    }, [])

    return (
        <>
            {movies.length > 0 ? movies.map((movie) => {
                return <Movie key={movie.id} movie={movie} />

            }) : <p>No Movies to Display</p> }
        </>
    )

   
    //       "title": "Inception",
    //       "id": "4",
    //       "director": "Chirs Nolan",
    //       "year": "2012",
    //       "user": {
    //         "email": "Mike@gmail.com",
    //         "first_name": null,
    //         "id": "4",
    //         "last_name": null,
    //         "username": "Mikeee"


}

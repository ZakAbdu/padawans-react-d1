import React from "react";


export default function Movie({ movie }) {
    return (
        <p>
            {movie.title} - {movie.year}
        </p>
    )
}

import Movie from "./movie";

export const Movies = () => {

    const movies = [
        {
        "title": "Django Unchained",
        "id": "1",
        "director": "Quentin Tarantino",
        "year": "2014"
        },
        {
          "title": "Up",
          "id": "2",
          "director": "SomeDisneyGuy",
          "year": "2008"
        },
        {
          "title": "Pulp Fiction",
          "id": "3",
          "director": "Quentin Tarantino",
          "year": "2000"
        },
        {
          "title": "Inception",
          "id": "4",
          "director": "Chirs Nolan",
          "year": "2012"
        }
    ]

    return (
        <>
            {movies.length > 0 ? movies.map((movie) => {
                return <Movie key={movie.id} movie={movie} />

            }) : <p>No Movies to Display</p> }
        </>
    )

}

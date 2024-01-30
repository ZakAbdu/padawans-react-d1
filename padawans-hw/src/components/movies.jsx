import Movie from "./Movie"

export const Movies = () => {

    const movies = [
        {
        "title": "Django Unchained",
        "id": "1",
        "director": "Quentin Tarantino",
        "year": "2014",
        "user": {
            "email": "dsmith232@gmail.com",
            "first_name": null,
            "id": "1",
            "last_name": null,
            "username": "dsmith232"
            }
        },
        {
          "title": "Up",
          "id": "2",
          "director": "SomeDisneyGuy",
          "year": "2008",
          "user": {
            "email": "zak2@gmail.com",
            "first_name": null,
            "id": "2",
            "last_name": null,
            "username": "Zakkkk"
            }
        },
        {
          "title": "Pulp Fiction",
          "id": "3",
          "director": "Quentin Tarantino",
          "year": "2000",
          "user": {
            "email": "parker@gmail.com",
            "first_name": null,
            "id": "3",
            "last_name": null,
            "username": "Parkerrr"
            }
        },
        {
          "title": "Inception",
          "id": "4",
          "director": "Chirs Nolan",
          "year": "2012",
          "user": {
            "email": "Mike@gmail.com",
            "first_name": null,
            "id": "4",
            "last_name": null,
            "username": "Mikeee"
            }
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

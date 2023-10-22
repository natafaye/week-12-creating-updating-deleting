
const moviesContainer = document.getElementById("movies-container")

async function onFetchMoviesClick() {
    const response = await fetch("http://localhost:3005/movies")
    const movieList = await response.json()

    moviesContainer.innerHTML = movieList.map(
        movie => `<div>
            <h3>${movie.title}</h3>
            <p>${movie.genreId}</p>
        </div>`
    ).join("")
}
let movielist = document.getElementById("movie-list");
let movies = [];
let posterPath = "https://image.tmdb.org/t/p/w500";

async function fetchdata() {
  const api = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=83d6ce566937e124e0fe7a064447c5da&page=1",
  );
  const response = await api.json();
  return response.results;
}

async function main() {
  movies =  await fetchdata();
  console.log(movies);
  movielist.innerHTML = movies
    .map(
      (x) =>
        `<li class="bg-white rounded-lg mt-10 ">
    <img src =${posterPath + x.poster_path} class=" w-full object cover h-50"/>
    <div class ="p-4">
        <h2 class ="font-bold text-black">${x.original_title}</h2>
        <p class = "font-semibold text-gray-500 line-clamp-3">${x.overview}</p>
        <button class ="mt-4 bg-red-600 text-white py-2 w-full rounded-lg"> watch Now </button>
    </div>
    `,
    )
    .join("");
}
main();

const form = document.getElementById("movieForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const movieName = document.getElementById("movieInput").value;

const apiKey = "fc22108f";

fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`)
.then(res => res.json())
.then(data => {

if(data.Response === "False"){
document.getElementById("movieResult").innerHTML = "<h3>Movie not found</h3>";
return;
}

document.getElementById("movieResult").innerHTML = `

<div class="movie-card">

<img src="${data.Poster}" alt="poster">

<div class="movie-info">

<h2>${data.Title}</h2>

<p><b>Year:</b> ${data.Year}</p>

<p><b>Genre:</b> ${data.Genre}</p>

<p><b>IMDB:</b> ⭐ ${data.imdbRating}</p>

<p>${data.Plot}</p>

</div>

</div>
`;

});

});
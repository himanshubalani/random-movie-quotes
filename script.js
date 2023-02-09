// Description: This file contains the JavaScript code for reading JSON and showing it on the page.
let quote = document.getElementById("quote");
let movie = document.getElementById("movie");
let author = document.getElementById("author");
let btn = document.getElementById("getQuote");
const url = "http://localhost:3000/quotes";
let getQuote = () => {
  fetch(url)
    .then((response) => response.json())
	.then((data) => {
	  quote.innerHTML = data.quote;
	  author.innerHTML = data.author;
	  movie.innerHTML = data.movie;
    
	})
}

btn.addEventListener("click", getQuote);
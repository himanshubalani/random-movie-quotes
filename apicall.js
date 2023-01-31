function apicall() {
		const url = `http://localhost:3000/quotes`;
		fetch(url)
	  .then((response) => response.json())
	  .then((data) => {
		//get random quotes and put them in the html
			let random = Math.floor(Math.random() * data.length);
			let quote = data[random].quote;
			let movie = data[random].movie
			document.getElementById("quote").innerHTML = quote;
			document.getElementById("movie").innerHTML = movie;
		}).catch((err) => console.log(err));
	}

// Path: index.html
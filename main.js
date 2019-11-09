//Global variables
var l=0;

function searchMovie(){
    var request = new XMLHttpRequest()
    var movieTitle = document.getElementById("movieTitle").value
    l = movieTitle.length;
    var url = 'http://www.omdbapi.com/?apikey=aeabca&s='+movieTitle
    console.log(url)
    request.open('GET', url, true)
    request.onload = function() {
    var data = JSON.parse(this.response)
    console.log(data);
    if (request.status >= 200 && request.status < 400 && data.Response!=="False") {
        var list = data.Search;
        const app = document.getElementById("movieList")
        app.innerHTML = "";
         list.forEach(movie => {
         const newMovie = document.createElement("div");
         newMovie.setAttribute("class","movie");
         newMovie.setAttribute("id",`${movie.imdbID}`)
         newMovie.setAttribute("target","_blank")
         newMovie.setAttribute("onClick",`window.open("https://www.imdb.com/title/${movie.imdbID}");return false;`)
         if(movie.Poster==="N/A"){
            var para = document.createElement("p");
            var node = document.createTextNode(`${movie.Title}`);
            para.appendChild(node);
            newMovie.appendChild(para);
         }
         else{
            newMovie.style.background = `url(${movie.Poster})`
         }
         app.appendChild(newMovie);
         })
         const newMovie = document.createElement("div");
         newMovie.setAttribute("class","movie");
         newMovie.setAttribute("id","showMore")
         var para = document.createElement("p");
         var node = document.createTextNode("Show More");
         para.appendChild(node);
         para.setAttribute("onClick","moreSearch()");
         newMovie.appendChild(para);
         app.appendChild(newMovie)

    } else {
        const app = document.getElementById("movieList")
        app.innerHTML = "";
    }
    }

    request.send()
}

function moreSearch(){
    document.getElementById("showMore").remove();
    l--;
    var request = new XMLHttpRequest()
    var movieTitle = document.getElementById("movieTitle").value
    movieTitle = movieTitle.substring(0,l);
    var url = 'http://www.omdbapi.com/?apikey=aeabca&s='+movieTitle
    request.open('GET', url, true)
    request.onload = function() {
    var data = JSON.parse(this.response)
    console.log(data);
    if (request.status >= 200 && request.status < 400 && data.Response!=="False") {
        var list = data.Search;
        const app = document.getElementById("movieList")
         list.forEach(movie => {
         const newMovie = document.createElement("div");
         newMovie.setAttribute("class","movie");
         newMovie.setAttribute("id",`${movie.imdbID}`)
         newMovie.setAttribute("target","_blank")
         newMovie.setAttribute("onClick",`window.open("https://www.imdb.com/title/${movie.imdbID}");return false;`)
         if(movie.Poster==="N/A"){
            var para = document.createElement("p");
            var node = document.createTextNode(`${movie.Title}`);
            para.appendChild(node);
            newMovie.appendChild(para);
         }
         else{
            newMovie.style.background = `url(${movie.Poster})`
         }
         app.appendChild(newMovie);
         })
         const newMovie = document.createElement("div");
         newMovie.setAttribute("class","movie");
         newMovie.setAttribute("id","showMore")
         var para = document.createElement("p");
         var node = document.createTextNode("Show More");
         para.appendChild(node);
         para.setAttribute("onClick","moreSearch()");
         newMovie.appendChild(para);
         app.appendChild(newMovie)

    } else {
    //    console.log('error')
    }
    }

    request.send()

}
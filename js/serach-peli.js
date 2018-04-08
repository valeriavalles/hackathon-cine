$(document).ready(function() {
  $('#searchForm').on('click', function(e) {
    var searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
    
  function getMovies(searchText) {
    // 98325a9d3ed3ec225e41ccc4d360c817,'http://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query='
    // http://www.omdbapi.com/?apikey=3a181f1c&s=
    // src="${movie.poster_path}"
    axios.get('http://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query=' + searchText)
      .then((response) =>{
        console.log(response);
        $('#searchText').val();
        var movies = response.data.results;
        var output = '';
        $.each(movies, (index, movie) => {
          output += `
				<div class="col-sm-6 col-md-3">
				  <div class="well text-center center-block">
					<img class="img-responsive center-block" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" >
					<h5 class="color-h5">${movie.title}</h5>

					<a onclick="movieSelected('${movie.ID}')" class= "btn btn-coincidencia" href="#btn-peli" id="btn-mypeli" data-toggle="modal"  href="#">Movie Details</a>
					</div>
				</div>
				`;
          $('btn-mypeli').on('click', function() {
            alert('hola');
          });

          // movie.poster_path
			  $('#movies').html(output);	
			  console.log('#movies');
        });
      })
      .catch((err) => {
        console.log(err);
      });	
  }
});
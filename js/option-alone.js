/* Funcionalidad Vista Opción Ver Película Sólo */
$(document).ready(function() {
  /* elementos de la data*/
  var musical = ['Cabaret', 'Grease', 'Night and Day', 'Lovestruck: The Musical', 'Shrek the Musical', 'High School Musical']; 
  var fantasy = ['Justice League', 'Shrek the Musical', 'Lovestruck: The Musical', 'Harry Potter', 'Star Wars', 'Click', 'Ted', 'Pirates of the Caribbean', 'Wonder Woman'];
  var accion = ['Kung Fu Panda', 'The Avengers', 'Rise of the Planet of the Apes', 'True Lies', 'Kill Bill', 'Justice League', 'Star Wars', 'Avatar', 'Wonder Woman', 'Scott Pilgrim vs. the World', 'Tropic Thunder', 'Pirates of the Caribbean', 'Superman', 'Shaolin Soccer', 'Airbag'];
  var animada = ['Shrek', 'Kung Fu Panda', 'The Avengers', 'Ratatouille', 'Up', 'Moana', 'Galaxy Buck', 'Coco'];
  var aventura = ['Shrek', 'Kung Fu Panda', 'The Avengers', 'Justice League', 'Harry Potter', 'Star Wars', 'Coco', 'Up', 'Avatar', 'Moana', 'Pirates of the Caribbean', 'Back to the Future', 'Wonder Woman', 'Superman'];
  var cienciaficcion = ['The Prestige', 'Rise of the Planet of the Apes', 'I Am Legend', 'The Adjustment Bureau', 'Primer', 'Gattaca', 'Back to the Future', 'Alien', 'Galaxy Buck'];
  var comedia = ['Shrek', 'True Lies', 'High School Musical', 'Shrek the Musical', 'Lovestruck: The Musical', 'Ratatouille', 'Modern Romance', 'Up', 'Sun, Sand & Romance', 'Love Actually', 'Date Movie', 'Ted', 'Coco', 'Moana', 'Perfectos desconocidos', 'Mamá se fue de viaje', 'Scott Pilgrim vs. the World', 'Tropic Thunder', 'Shaolin Soccer', 'Airbag', 'Back to the Future', 'Kristove roky'];
  var drama = ['Fifty Shades of Grey', 'Cabaret', 'Obsessed', 'The Prestige', 'Black Swan', 'Behind the Walls', 'Rise of the Planet of the Apes', 'High School Musical', 'The Other', 'Raising Cain', 'Harry Potter', 'I Am Legend', 'The Sixth Sense', 'Love Actually', 'Night and Day', 'Possession', 'Click', 'Primer', 'Avatar', 'Amour', 'Titanic', 'Gattaca', 'Kristove roky', 'I Am Sam', 'Superman'];
  var erotico = ['Fifty Shades of Grey'];
  var romantica = ['Fifty Shades of Grey', 'Grease', 'Obsessed', 'Vertigo', 'Modern Romance', 'Scott Pilgrim vs. the World', 'The Adjustment Bureau', 'Titanic', 'Date Movie', 'Love Actually', 'Sun, Sand & Romance'];
  var suspenso = ['Obsessed', 'The Prestige', 'Black Swan', 'Behind the Walls', 'The Other', 'The Grudge', 'The Sixth Sense', 'Vertigo', 'Psycho', 'Memento'];
  var terror = ['Behind the Walls', 'True Lies', 'Kill Bill', 'The Other', 'The Grudge', 'American Nightmare', 'Raising Cain', 'Gattaca', 'Primer', 'Alien', 'Possession', 'The Sixth Sense', 'Vertigo', 'Psycho', 'Memento', 'I Am Legend'];

  /* eventos para cada tipo de genero de la pelicula*/
  var array1 = [];
  /* evento para el género accion*/
  $('#action').click(function() {
    array1 = accion;
    console.log(array1);
  });
  /* evento para el género animado*/
  $('#animada').click(function() {
    array1 = animada;
    console.log(array1);
  });
  /* evento para el género aventura*/
  $('#aventura').click(function() {
    array1 = aventura;
    console.log(array1);
  });
  /* evento para el género ciencia ficción*/
  $('#cienciaficcion').click(function() {
    array1 = cienciaficcion;
    console.log(array1);
  });
  /* evento para el género comedia*/
  $('#comedia').click(function() {
    array1 = comedia;
    console.log(array1);
  });
  /* evento para el género drama*/
  $('#drama').click(function() {
    array1 = drama;
    console.log(array1);
  });
  /* evento para el género erótico*/
  $('#erotico').click(function() {
    array1 = erotico;
    console.log(array1);
  });
  /* evento para el género fantasia*/
  $('#fantasy').click(function() {
    array1 = fantasy;
    console.log(array1);
  });
  /* evento para el género musical*/
  $('#musical').click(function() {
    array1 = musical;
    console.log(array1);
  });
  /* evento para el género romantica*/
  $('#romantica').click(function() {
    array1 = romantica;
    console.log(array1);
  });
  /* evento para el género suspenso*/
  $('#suspenso').click(function() {
    array1 = suspenso;
    console.log(array1);
  });
  /* evento para el género terror*/
  $('#terror').click(function() {
    array1 = terror;
    console.log(array1);
  });
  /* funcion para llamar el api*/
  function apiCall() {
    /* generando elementos aleatorios*/
    var movie = Math.floor((Math.random() * array1.length - 1) + 1);
    console.log(movie);
    /* obteniendo la película aleatoria*/
    var randomMovie = array1[movie];
    console.log(randomMovie);
    /* obteniendo los datos con el api*/
    $.getJSON('http://www.omdbapi.com/?apikey=852159f0&t=' + randomMovie).then(function(response) {
      /* obteniendo el objeto*/
      console.log(response);
      /* var typeMovie = response.Genre;
      console.log(typeMovie);
      $('.genere').append(typeMovie);*/
      /* obteniendo la imagen*/
      var image = response.Poster;
      console.log(image);
      /* $('#cont').append('<div >' +image + ' </div>');*/
      /* $('#cont img').append('image')*/
      /* validando si tiene imagen*/
      if (image !== 'N/A') {
        $('#imagen').attr('src', image);
      }
    });
  }
  /* generando las imagenes cuando hay click */
  $('#boton').click(function() {
    apiCall();
  });
  /* validando el ingreso del nombre*/
  $('#first-name').keyup(function() {
    /* obteniendo el valor*/
    var $inputName = $(this).val();
    /* expresion para numeros*/
    var $expresion1 = /[1-9]/;
    /*  se valida para que solo se ingrese letras y no numeros*/
    if ($inputName.match($expresion1)) {
      alert('Solo se ingresa letras');
      $(this).val('');
    }
  });
});

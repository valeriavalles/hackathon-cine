/* Funcionalidad Vista Opción Ver Película en Grupo */
$(document).ready(function() {
  $('#select-1').hide();
  $('#select-2').hide();
  $('#select-3').hide();
  $('#select-4').hide();
  $('#select-5').hide();
  $('.btn-1').hide();

  // selecciona el contenedor para los cuadros

  var chooseGender = $('#choose-gender');
  // el evento
  $('#person-number').change(function() {
    switch (true) {
    case event.target.value === '1':
      // agrega la clase display none
      $('#select-1').hide();
      $('#select-2').hide();
      $('#select-3').hide();
      $('#select-4').hide();
      $('#select-5').hide();
      $('.btn-1').hide();
      $('.carousel-temp').show();
      break;
    case event.target.value === '2':
      // chooseGender.html('');
      $('#select-1').show();
      $('#select-2').show();
      $('#select-3').hide();
      $('#select-4').hide();
      $('#select-5').hide();
      $('.btn-1').show();
      $('.carousel-temp').hide();
      break;
    case event.target.value === '3':
      $('#select-1').show();
      $('#select-2').show();
      $('#select-3').show();
      $('#select-4').hide();
      $('#select-5').hide();
      $('.btn-1').show();
      $('.carousel-temp').hide();
      break;
    case event.target.value === '4':
      $('#select-1').show();
      $('#select-2').show();
      $('#select-3').show();
      $('#select-4').show();
      $('#select-5').hide();
      $('.btn-1').show();
      $('.carousel-temp').hide();
      break;
    case event.target.value === '5':
      $('#select-1').show();
      $('#select-2').show();
      $('#select-3').show();
      $('#select-4').show();
      $('#select-5').show();
      $('.btn-1').show();
      $('.carousel-temp').hide();
      break;
    };
  });
  // melissa y yenny
  /* Arreglos con Preferencias existentes en la API*/
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
  /* array segun los generos de peliculas*/
  var total = [];
  /* var flag = 0;*/
  /* evento para los datos del genero  musical*/
  $('.musical').click(function() {
    /* flag = 1;*/
    /* incorpora los elementos de la data musical*/
    total = $.merge(total, musical);
    console.log(total);
  });
  /* evento para los datos del género fantasia*/
  $('.fantasy').click(function() {
    /* flag = 2;*/
    /* incorpora los elementos de la data fantasy*/
    total = $.merge(total, fantasy);
    console.log(total);
  });
  /* evento para los datos del género ciencia ficción */
  $('.ficcion').click(function() {
    /* flag = 3 ;*/
    /* incorpora los elementos de la data ciencia ficcion*/
    total = $.merge(total, cienciaficcion);
    console.log(total);
  });
  /* evento para los datos del género acción */
  $('.accion').click(function() {
    /* flag = 4 ;*/
    /* incorpora los elementos de la data accion*/
    total = $.merge(total, accion);
    console.log(total);
  });
  /* evento para los datos del género animados*/
  $('.animada').click(function() {
  /*  flag = 5 ;*/
    /* incorpora los elementos de la data accion*/
    total = $.merge(total, animada);
    console.log(total);
  });
  /* evento para los datos del género aventura*/
  $('.aventura').click(function() {
  /*  flag = 6 ;*/
    total = $.merge(total, aventura);
    console.log(total);
  });

  $('.cienciaficcion').click(function() {
    flag = 7 ;
    total = $.merge(total, cienciaficcion);
    console.log(total);
  });

  $('.comedia').click(function() {
    flag = 8 ;
    total = $.merge(total, comedia);
    console.log(total);
  });

  $('.drama').click(function() {
    flag = 9 ;
    total = $.merge(total, drama);
    console.log(total);
  });

  $('.erotico').click(function() {
    flag = 10 ;
    total = $.merge(total, erotico);
    console.log(total);
  });

  $('.romantica').click(function() {
    flag = 11 ;
    total = $.merge(total, romantica);
    console.log(total);
  });

  $('.suspenso').click(function() {
    flag = 12 ;
    total = $.merge(total, suspenso);
    console.log(total);
  });

  $('.terror').click(function() {
    flag = 14 ;
    total = $.merge(total, aventura);
    console.log(total);
  });

  var temp = [];
  var coincidencia = [];
  var poscoincencia = [];
	 var pos = 0;
  var myArrClean = [];
  /* evento para el btn quiero ver mis pelis*/
  $('#match').click(function() {
    console.log(total);
	  flag = 15;
    /* recorrido en el array de los géneros de peliculas seleccionados,suma */
    for (var i = 0; i < total.length ; i++) {
      temp[i] = total[i];
      /* comparación con el siguiente elemento del array*/
      for (var j = i + 1 ; j < total.length; j++) {
        /* si son iguales se guarda en coincidencia*/
        if (temp[i] === total[j]) {
          /* pos = pos + 1;*/
          coincidencia[i] = temp[i] ;
          // poscoincencia[i] = poscoincencia[pos]+1 ;
        }
      }
    }
    // elimina del array los vacios o ceros y se guarda en myArrClean
    myArrClean = coincidencia.filter(Boolean);
    console.log(coincidencia);
  });


  /* funcion para llamar el api*/
  function apiCall() {
    $('#information').html('');
    /* si el array no tiene coinciencias, el resultado es todas las peliculas de los géneros seleccionados*/
    if (myArrClean.length === 0) {
      var movie = Math.floor((Math.random() * total.length - 1) + 1);
      console.log(movie);
      var randomMovie = total[movie];
    } else {
      var movie = Math.floor((Math.random() * myArrClean.length - 1) + 1);
      console.log(movie);
      var randomMovie = myArrClean[movie];
      console.log(randomMovie);
      // apikey=3a181f1c&t=
      // a498e26d
    }
    $.getJSON('http://www.omdbapi.com/?apikey=852159f0&t=' + randomMovie).then(function(response) {
      /* obteniendo el objeto*/
      console.log(response);

      var title = response.Title;
      var actors = response.Actors;
      var typeMovie = response.Genre;
      var awards = response.Awards;
      var plot = response.Plot;
      console.log(typeMovie);
      $('#information').append('<div > Titulo: ' + title + ' </div>');
      $('#information').append('<div > Actores: ' + actors + ' </div>');
      $('#information').append('<div > Género: ' + typeMovie + ' </div>');
      $('#information').append('<div > Premios: ' + awards + ' </div>');
      $('#information').append('<div > Premios: ' + plot + ' </div>');
      var image = response.Poster;
      console.log(image);
      /* $('#cont').append('<div >' +image + ' </div>');*/
      /* $('#cont img').append('image')*/
      if (image !== 'N/A') {
        $('#imagen').attr('src', image);
      }
    });
  }
  $('#match').click(function() {
    apiCall();
    $('#imagen').removeClass('hide');
    $('#btn-modal').removeClass('hide');
  });


  /* validando los inputs para que no ingrese numero*/
  $('#first-person, #second-person').keyup(function() {
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

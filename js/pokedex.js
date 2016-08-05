//Iteration 1
$('#inputTextID').keypress(function (e) {
	var key = e.which;
	var inputTextID;
	if(key === 13) {
		inputTextID =  $('#inputTextID').val();
		var url = 'http://pokeapi.co/api/v2/pokemon/'+inputTextID+'/'
		requestID(url);
		return false;
	}
});

function requestID(url) {
	$.ajax({
	  url: url,
	  data: '',
	  error: function() {
	     $('#info').html('<p>An error has occurred</p>');
	  },
	  dataType: 'json',
	  success: function(data) {

	      var type = function (){
	    	if (data.types.length<2) {
	    	return(data.types[0].type.name);
	    	}else {
	    	return (data.types[0].type.name+' and '+data.types[1].type.name);
	    	}
	    }

	var pokemonString = 
	'<div class="col-sm-2 col-md-4">'+
		'<div class="thumbnail">'+
		    '<img src='+data.sprites.front_default+' alt="...">'+
		    '<div class="caption">'+
		        '<h2 class="pokemonName">Name: '+data.name+'</h2>'+
		        '<p class="pokemonType">Type: '+type()+'</p>'+
		        '<p class="pokemonWeight">Weight: '+data.weight+'</p>'+
		        '<p class="pokemonHeight">Height: '+data.height+'</p>'+
		    '</div>'+
		'</div>'+
	'</div>'

	$('#pokemonList').append(pokemonString);
  },
  type: 'GET'
});
}

//Iteration 2
$('#inputTextType').keypress(function (e) {
	var key = e.which;
	var inputTextType;
	if(key === 13) {
		inputTextType =  $('#inputTextType').val();
		var url = 'http://pokeapi.co/api/v2/type/'+inputTextType+'/'
		requestType(url);
		return false;
	}
});

function requestType(url) {
	$.ajax({
	  url: url,
	  data: '',
	  error: function() {
	     $('#info').html('<p>An error has occurred</p>');
	  },
	  dataType: 'json',
	  success: function(data) {
	
	for (var i = 0; i < 10; i++) {
	var pokemonString = 
	'<div class="col-sm-2 col-md-4">'+
		'<div class="thumbnail">'+
		    '<img class="pokemonPic'+[i]+'" src='+getPic(i)+' alt="...">'+
		    //'<img src='+data.sprites.front_default+' alt="...">'+
		    '<div class="caption">'+
		        '<h2 class="pokemonName">Name: '+data.pokemon[i].pokemon.name+'</h2>'+
		        '<p class="pokemonType">Type: '+data.name+'</p>'+
		        '<p class="pokemonWeight'+[i]+'">Weight: '+getWeight(i)+'</p>'+
		        //'<p class="pokemonWeight">Weight: '+data.weight+'</p>'+
		        '<p class="pokemonHeight'+[i]+'">Height: '+getHeight(i)+'</p>'+
		        //'<p class="pokemonHeight">Height: '+data.height+'</p>'+
		    '</div>'+
		'</div>'+
	'</div>'

	$('#pokemonList').append(pokemonString);
}

	 function getWeight(parameter){
	  $.ajax({
	  url: data.pokemon[parameter].pokemon.url,
	  data: '',
	  success: function(data) {
	  console.log(data.weight);
	  $('.pokemonWeight'+parameter+'').append(data.weight);
	  },
	  type: 'GET'
	});
}

	 function getHeight(parameter){
	  $.ajax({
	  url: data.pokemon[parameter].pokemon.url,
	  data: '',
	  success: function(data) {
	  console.log(data.height);
	  $('.pokemonHeight'+parameter+'').append(data.height);
	  },
	  type: 'GET'
	});
}

	 function getPic(parameter){
	  $.ajax({
	  url: data.pokemon[parameter].pokemon.url,
	  data: '',
	  success: function(data) {
	  console.log(data.sprites.front_default);
	  $('.pokemonPic'+parameter+'').append(data.sprites.front_default);
	  },
	  type: 'GET'
	});
}

  },
  type: 'GET'
});
}
$(document).ready(function(){

var url = 'http://www.mindicador.cl/api/';

var indicadores = {
Dólar: 'dolar',
UTM: 'utm',
UF: 'uf',
EURO: 'euro'

}

	$('#select').on('change', function(){


$.ajax({
	url: url + indicadores[$(this).val()],
	method: 'GET'
}).done(function(data){
	console.log(data);
});

})
});
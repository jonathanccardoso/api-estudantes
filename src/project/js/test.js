$(document).ready(function() {
	$.ajax({
		url: "http://rest-service.guides.spring.io/greeting"
		//https://suap.ifrn.edu.br/api/v2/edu/alunos/?limit=1
		//url: "https://ghibliapi.herokuapp.com/films"		
	}).then(function(data) {
		 $('.greeting-id').append(data.id);
		 $('.greeting-content').append(data.content);

		//$('.greeting-id').append(data.matricula);
		//$('.greeting-content').append(data.nome);
	});
});


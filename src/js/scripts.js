$(document).ready(function(){

	// /json ou .json
	var urlStr = "https://locaslhost/estudantes.json"; 

	$.ajax({
		url : urlStr,
		type : "get",
		dataType : "json",
		success : function(data){
			console.log(data);

			//mostrar todos os estudantes
			$("#txtNome").val(data.nome); //implementação por ID
			//$("#txtimge").val(data.imagem); ainda nao implementado@
		},
		error : function(erro){
			console.log(erro);
		}		
	});
});

//onde a api local irá ser consumida!
$(document).ready(function(){

	// /json ou .json
	var urlStr = "https://localhost:3000/estudantes";

	//função do jquery
	//biblbioteca que pega servidores externos e internos
	$.ajax({
		url : urlStr,
		type : "GET",
		dataType : "json",
		success : function(data){
			console.log(data);

			//mostrar todos os estudantes
			pagina = documents.getElementById('pagina-teste');
			pagina.innerHTML = '';
			for (var i = 0; i < estudantes.legth; i++){
				pagina.innerHTML += `
					<div class="col-md-4">
						<div class="card">
							<img class="card-img-top" alt="Bootstrap Thumbnail Second" src="${estudantes.imagem}">
							<div class="card-block">
								<h5 class="card-title">${estudantes.nome}</h5>
							</div>
							<input type="button" value="delete" onclick="Estudantes.remove(${estudantes.id});" />
							<input type="button" value="delete" onclick="estudanteRemove(${estudantes.id});" />
							<button>editar</button>
						</div>
					</div>
				`;
			}

			//ao clicar em excluir - botao excluir por id
			//ao adcionar e editar - abrir modal p/ editar por id
				//Estudantes.remove({ _id: req.params.id } - <input type="button" value="delete" onclick="Estudantes.remove();" />
				//ok do modal p/ update - Estudantes.findById(${estudantes.id})
				//ok do modal p/ add - estudantes.save(${estudantes.id})

			// $("#txtNome").val(data.nome); //implementação por ID
			// $("#txtimge").val(data.imagem); ainda nao implementado@
			//implementar passando apenas o link da foto
		},
		error : function(erro){
			console.log(erro);
		}
	});
	function estudanteRemove(id){
		//chamar function la do app.js
		Estudantes.remove(id);
	}
});


/*or
	$.ajax({
		url : urlStr,
		type : "GET",
	})
	.done(function retorno){
		console.log(retorno);
		alert(retorno.estudantes[0].nome);//1 estudante - nome
	}

*/

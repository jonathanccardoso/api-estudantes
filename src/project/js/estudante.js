function createNode(element){
	return document.createElement(element);
}

function append(parent, el){
	return parent.appendChild(el);
}

const ul = document.getElementById("estudante");

const url = 'https://randomuser.me/api/?results=20';

fetch(url)
.then((resp) => resp.json())
.then(function(data){
	let authors = data.results;
	return authors.map(function(estudante){
		
		let pagina = createNode('div');
		pagina.innerHTML = `
				<div class="col-md-12">						
						<div class="card">
							<img class="card-img-top" alt="Bootstrap Thumbnail First" src="${estudante.picture.large}">
							<div class="card-block">
								<h5 class="card-title">${estudante.name.first} ${estudante.name.last}</h5>
							</div>
							<p class="m-3">
								<button type="submit" class="btn btn-primary" onclick="alert('id-value:${estudante.id.value} id-name:${estudante.id.name}')">Deletar</button>
								<a class="btn btn-secondary" href="#editar" role="button" class="btn" data-toggle="modal">Editar</a>
							</p>
						</div>
					</div>`;

		append(ul,pagina); //estudante - card
	})
})

.catch(function(error){
	console.log(JSON.stringify(error));
});

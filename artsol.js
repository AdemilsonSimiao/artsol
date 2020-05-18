
var fieldEmailEnable = document.getElementById('fieldEmailEnable');
var reposta = document.getElementById('reposta');
 fieldEmailEnable.addEventListener('submit', function(e){
	 e.preventDefault();
	
	var dados = new FormData(fieldEmailEnable);
	console.log(dados)
	console.log(dados.get('fieldButtom'))
	
	fetch('artsol.php',{method: 'POST', body: dados})
	
	.then(res => res.json())
	.then(data =>{console.log(data)
	if (data === 'erro'){
		resposta.innerHTML ='<div class="alert alert-danger" role="alert">email preenchido errado</div>'
	}else{resposta.innerHTML = '<div class="alert alert-primary" role="alert">${data}</div>'}
	})
 })
 

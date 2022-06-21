var varcep = document.getElementById('campocep');
varcep.addEventListener("blur", (evento)=>{
    
     //substituindo o traço por nada 
     let pesquisa = varcep.value.replace("-","");  
    
     let option ={
         method: 'get',
         mode: 'cors',
         cache: 'default'
     }
 
     //podendo usar assim também (com crase):  fetch(`https://viacep.com.br/ws/${pesquisa}/json/`, option);
     fetch("https://viacep.com.br/ws/"+pesquisa+"/json/", option) 
 
     //Se der certo
     .then(response=>{response.json()//aqui já vou tratar em JSON
         .then(dados=>{
            //o código comentado abaixo serve para exibir no formato de objeto JSON
            //console.log(dados)
            document.getElementById('campoendereco').value = dados.logradouro;
            document.getElementById('campobairro').value = dados.bairro;
            document.getElementById('campocidade').value = dados.localidade;
            document.getElementById('campoestado').value = dados.uf;
         }
         )
     })
     //se der errado
     .catch(evento =>console.log('Algo deu errado: '+evento, message))
});
 
//função para enviar os dados
function enviarDados(){     
      
    let let_cep         = document.getElementById('campocep').value;
    let let_endereco    = document.getElementById('campoendereco').value;
    let let_bairro      = document.getElementById('campobairro').value;
    let let_cidade      = document.getElementById('campocidade').value;
    let let_estado      = document.getElementById('campoestado').value;

      let objetoJSON = {
         
          'endereco': let_endereco,
          'cep': let_cep,
          'bairro': let_bairro,
          'cidade': let_cidade,
          'estado': let_estado
      }
      console.log(objetoJSON);   
}

//função sempre chamada no carregamento da página e no botão APAGAR
function resetarcampos(){
        document.getElementById('campocep').value='';//apagando o campo CEP
        document.getElementById('campocidade').value='';//apagando o campo cidade
        document.getElementById('campoendereco').value='';//apagando o campo endereco
        document.getElementById('campoestado').value='';//apagando o campo estado
        document.getElementById('campobairro').value='';//apagando o campo bairro
}
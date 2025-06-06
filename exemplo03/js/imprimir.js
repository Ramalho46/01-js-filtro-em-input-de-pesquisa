/*
  Exportação padrão (default):
  function imprimir(json) {
    // ...
  }
  export default imprimir;

  A função é exportada como exportação padrão (default export).
  Pode ser importada com qualquer nome:
  import qualquerNome from './imprimir.js';

  Só pode haver uma exportação default por arquivo.
*/
function imprimir(json){
  var lista = document.getElementById('lista');

  lista.innerHTML += '';
  return `<div class="id">ID: ${json.id}</div> 
          <div class="nome">Produto: ${json.produto}</div> 
          <div class="nascimento">Preço: ${json.preco}</div>
          <div>Validade: ${json.validade}</div>
          <button ></button>
          `
}

export default imprimir;

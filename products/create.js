// Cadastro de produto
function cadastrarProduto(nome, preco) {
  return { id: Date.now(), nome, preco, ativo: true };
}
module.exports = { cadastrarProduto };

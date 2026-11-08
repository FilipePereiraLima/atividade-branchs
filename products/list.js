// Listagem de produtos
function listarProdutos(produtos) {
  return produtos.filter(p => p.ativo).map(p => `${p.nome} - R$ ${p.preco}`);
}
module.exports = { listarProdutos };

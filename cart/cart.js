// Carrinho de compras
class Carrinho {
  constructor() { this.itens = []; }
  adicionar(produto) { this.itens.push(produto); }
  total() { return this.itens.reduce((s, p) => s + p.preco, 0); }
}
module.exports = { Carrinho };

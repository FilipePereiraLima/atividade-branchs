// Relatório de vendas
function gerarRelatorio(vendas) {
  const total = vendas.reduce((s, v) => s + v.valor, 0);
  return { totalVendas: vendas.length, faturamento: total, geradoEm: new Date() };
}
module.exports = { gerarRelatorio };

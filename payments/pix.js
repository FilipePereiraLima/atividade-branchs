// Pagamento via PIX
function gerarPix(chave, valor) {
  return { chave, valor, tipo: PIX, status: pendente, criadoEm: new Date() };
}
module.exports = { gerarPix };

// Login de usuario
function login(email, senha) {
  console.log("Logando:", email);
  return { autenticado: true, usuario: email };
}
module.exports = { login };

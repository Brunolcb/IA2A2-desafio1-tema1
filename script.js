function entrar() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username && password) {
    window.location.href = "produtos.html";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
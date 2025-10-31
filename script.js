document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault(); // impede o envio real
  alert("Mensagem enviada com sucesso!");
  this.reset(); // limpa o formulário
});